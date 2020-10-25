import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {LogService} from '../LogService.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  providers: [DataService, LogService]
})
export class ContactPageComponent implements OnInit {
  items: string[] = [];
  name: string;

  constructor(private dataService: DataService, private logger: LogService) {
  }

  addItem(name: string): void {
    this.dataService.addData(name);
    this.logger.log('Test the `log()` Method');
  }

  ngOnInit(): void {
    this.items = this.dataService.getData();
  }

  viewMode = 'contact';
  count = 0;

  buttonClicked(): void {
    this.count = this.count + 1;
    console.log('Messages sent:');
  }
}
