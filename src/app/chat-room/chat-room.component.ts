import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
messageBody = "";
messages = Array();
ioConnection: any;
  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.initIoConnection()
  }
private initIoConnection(){
  this.socketService.initSocket();
  this.ioConnection = this.socketService.onMessage().subscribe((message: string)=>{
    this.messages.push(message);
    console.log("message recieved???")
  })
}
  sendMessage(messageBody: String){
console.log(messageBody);
if(this.messageBody){
  this.socketService.send(this.messageBody);
  this.messageBody = "";
}else {
  console.log("No Message")
}
// this.messages.push(messageBody)

  }

}
