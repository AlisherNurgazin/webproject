import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }
  viewMode = 'contact';
  count = 0;
  buttonClicked(): void {
    this.count = this.count + 1;
    console.log('Messages sent:');
  }

  ngOnInit(): void {console.log('Message sent');
  }
}
