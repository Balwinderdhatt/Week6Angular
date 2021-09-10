import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    CommonModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
