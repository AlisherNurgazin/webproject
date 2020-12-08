import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {LogService} from '../LogService.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [DataService, LogService]
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
