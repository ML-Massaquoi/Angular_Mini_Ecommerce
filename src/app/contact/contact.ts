import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {

  onSendMessage(){
    alert('Message sent. Thank you for contacting us we will respond ASAP')
  }

}
