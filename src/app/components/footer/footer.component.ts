import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  title = 'ToDO';

  myDate = Date.now();
  x = 9.99;
  ngOnInit(): void {
  }
}