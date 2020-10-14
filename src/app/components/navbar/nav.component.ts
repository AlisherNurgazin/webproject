import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  title = 'ToDO';

  ngOnInit(): void {console.log('test');


  }

  ngOnDestroy(): void {
    console.log('Header OnDestroy');
  }
}
