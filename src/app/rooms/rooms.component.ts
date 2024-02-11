import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle, DatePipe, TitleCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe, SlicePipe } from '@angular/common';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
    selector: 'hinv-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [NgIf, NgFor, NgClass, NgStyle, DecimalPipe, DatePipe, TitleCasePipe, CurrencyPipe, PercentPipe, JsonPipe, SlicePipe, RoomsListComponent]
})
export class RoomsComponent implements OnInit{
  hotelName = 'Hilton Hotel';
  hideRooms = false;
  numberOfRooms = 10;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomList =     
    [
    {roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi, TV and Bathroom',
    price: 500,
    photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fluxury-room&psig=AOvVaw3vVoU-3imYfudpP1rDftkD&ust=1707582399789000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDdmabWnoQDFQAAAAAdAAAAABAE',
    checkinTime: new Date('03-Feb-2024'),
    checkoutTime: new Date('04-Feb-2024'),
    rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Presidential Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Room Service and Pool',
      price: 1500,
      photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fluxury-room&psig=AOvVaw3vVoU-3imYfudpP1rDftkD&ust=1707582399789000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDdmabWnoQDFQAAAAAdAAAAABAJ', 
      checkinTime: new Date('01-Feb-2024'),
      checkoutTime: new Date('02-Feb-2024'),
      rating: 5.0
    },
    {
      roomNumber: 3,
      roomType: 'Ordinary Room',
      amenities: 'Air Conditioner, Free Wi-Fi and TV',
      price: 100,
      photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fluxury-room&psig=AOvVaw3vVoU-3imYfudpP1rDftkD&ust=1707582399789000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDdmabWnoQDFQAAAAAdAAAAABAR',
      checkinTime: new Date('11-Feb-2024'),
      checkoutTime: new Date('12-Feb-2024'),
      rating: 4.3
    }
  ]
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

}
