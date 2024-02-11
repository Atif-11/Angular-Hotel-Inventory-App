export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;

}

export interface RoomList {
    roomNumber: number;
    roomType : string;
    amenities : string;
    price : number;
    photo : string;
    checkinTime : Date;
    checkoutTime: Date;
    rating : number;
}