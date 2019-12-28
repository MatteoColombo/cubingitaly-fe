import { Component, OnInit, Input } from '@angular/core';
import { BoardMember } from '../board-member';

@Component({
  selector: 'board-member',
  templateUrl: './board-member.component.html',
  styleUrls: ['./board-member.component.css']
})
export class BoardMemberComponent implements OnInit {

  @Input() board: BoardMember;

  constructor() { }

  ngOnInit() {
  }

}
