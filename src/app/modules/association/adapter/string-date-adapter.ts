import { DateAdapter } from '@angular/material';
// import { Optional, Inject } from '@angular/core';

const MONTH_NAMES = {
    'long': [
        'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};

const DAY_OF_WEEK_NAMES = {
    long: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
    short: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
    narrow: ['Z', 'M', 'D', 'W', 'D', 'V', 'Z']
};

const DATE_NAMES = 'x'.repeat(31).split('').map((_, idx) => `${idx + 1}`);

export class StringDateAdapter extends DateAdapter<string> {
    toIso8601(date: string): string {
        return date;
    }
    invalid(): string {
        return "not valid";
    }
    getYear(date: string): number {
        return parseInt(date.split('-')[0], 10);
    }
    getMonth(date: string): number {
        return parseInt(date.split('-')[1], 10) - 1;
    }
    getDate(date: string): number {
        return parseInt(date.split('-')[2], 10);
    }
    getDayOfWeek(date: string): number {
        return this._toNativeDate(date).getDay();
    }
    getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
        return MONTH_NAMES[style];
    }
    getDateNames(): string[] {
        return DATE_NAMES;
    }
    getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
        return DAY_OF_WEEK_NAMES[style];
    }
    getYearName(date: string): string {
        return String(this.getYear(date));
    }
    getFirstDayOfWeek(): number {
        return 1; // Monday
    }
    getNumDaysInMonth(date: string): number {
        const d = this._toNativeDate(date);
        return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    }
    clone(date: string): string {
        return date;
    }
    createDate(year: number, month: number, date: number): string {
        return [year, month + 1, date].map(n => String(n)).map(n => n.length < 2 ? `0${n}` : n).join('-');
    }
    today(): string {
        const now = new Date();
        return this.createDate(now.getFullYear(), now.getMonth(), now.getDate());
    }
    parse(value: any, _parseFormat: any): string | null {
        if (!value || typeof value !== 'string') { return null; }
        const [d, m, y] = value.split(/[-/]/).map(s => parseInt(s, 10));
        return this.createDate(y, m - 1, d);
    }
    format(date: string, displayFormat: any): string {
        if (!this.isValid(date)) {
            throw Error(`StringDateAdapter: invalid date ${date}`);
        }
        const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
        return dtf.format(this._toNativeDate(date));
    }
    addCalendarYears(date: string, years: number): string {
        return this._createDateWithOverflow(this.getYear(date) + years, this.getMonth(date), this.getDate(date));
    }
    addCalendarMonths(date: string, months: number): string {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    }
    addCalendarDays(date: string, days: number): string {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    getISODateString(date: string): string {
        return this._toNativeDate(date).toISOString();
    }
    isDateInstance(obj: any): boolean {
        return typeof obj === 'string' && !!obj;
    }
    isValid(date: string): boolean {
        if (!/\d{4}-\d{2}-\d{2}/.test(date)) { return false; }
        const [y, m, d] = date.split('-').map(x => parseInt(x, 10));
        if (y < 1800 || y > 3000) { return false; }
        if (m < 1 || m > 12) { return false; }
        if (d < 1 || d > 31) { return false; }
        if ([4, 6, 9, 11].indexOf(m) !== -1 && d > 30) { return false; }
        if (m === 2 && d > 29) { return false; }
        return true;
    }

    private _toNativeDate(date: string) {
        return new Date(this.getYear(date), this.getMonth(date), this.getDate(date));
    }
    private _createDateWithOverflow(year: number, month: number, date: number): string {
        // convert to Date and back to support things like 2018-01-32 to convert to 2018-02-01
        const d = new Date(year, month, date);
        return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(n => String(n)).map(n => n.length < 2 ? `0${n}` : n).join('-');
    }
}