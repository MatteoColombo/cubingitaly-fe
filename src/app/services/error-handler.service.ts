import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BadRequestError } from '../errors/bad.request.error';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {

  constructor(private injector: Injector) { super(); }

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      const router = this.injector.get(Router);
      const zone = this.injector.get(NgZone);
      if (error.status === 404) {
        zone.run(() => router.navigate(['non-trovato']));
      } else if (error.status === 403) {
        zone.run(() => router.navigate(['permesso-negato']));
      } else if (error.status === 400) {
        const dialog = this.injector.get(MatDialog);
        dialog.open(ErrorDialogComponent, {
          minWidth: '200px',
          data: error.error.message
        });
      } else {
        throw error;
      }
    } else if (error instanceof BadRequestError) {
      const dialog = this.injector.get(MatDialog);
      dialog.open(ErrorDialogComponent, {
        minWidth: '200px',
        data: error.message
      });
    } else {
      throw (error);
    }
  }
}