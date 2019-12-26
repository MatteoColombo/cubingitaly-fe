import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'html-viewer',
  templateUrl: './html-viewer.component.html',
  styleUrls: ['./html-viewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HtmlViewerComponent implements OnInit {

  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
