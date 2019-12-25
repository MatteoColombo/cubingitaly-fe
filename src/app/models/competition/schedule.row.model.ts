import { autoserialize, autoserializeAs } from 'cerialize';

export class ScheduleRowModel {

    @autoserialize
    public id: number;

    @autoserialize
    public name?: string;

    @autoserialize
    public roundName?: string;

    @autoserialize
    public roundFormat?: string;

    @autoserialize
    public eventId?: string;

    @autoserialize
    public timeLimit: string;

    @autoserialize
    public cutoff?: string;

    @autoserialize
    public advance: string;

    @autoserialize
    public room: string;

    @autoserialize
    public start: string;

    @autoserialize
    public end: string;

}