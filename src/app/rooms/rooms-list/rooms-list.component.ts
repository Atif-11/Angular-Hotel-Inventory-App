import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle, DatePipe, TitleCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe, SlicePipe } from '@angular/common';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgStyle, DecimalPipe, DatePipe, TitleCasePipe, CurrencyPipe, PercentPipe, JsonPipe, SlicePipe],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit{

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }

  ngOnInit(): void {

  }
  
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);

  }

}
