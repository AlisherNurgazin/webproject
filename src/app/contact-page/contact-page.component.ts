import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {LogService} from '../LogService.service';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  providers: [DataService, LogService]
})
export class ContactPageComponent implements OnInit {
  items: string[] = [];
  gamename: string;
  firstName;
  email;
  registerForm = new FormGroup({
    firstName: new FormControl(),
    email: new FormControl(),
  });
  constructor(private dataService: DataService, private logger: LogService) {
  }
  addItem(gamename: string){
    this.dataService.addData(gamename);
    this.logger.log('Logging service');
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }

  viewMode = 'contact';
  count = 0;

  buttonClicked(){
    this.count = this.count + 1;
    console.log('Messages sent:');
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }
}
