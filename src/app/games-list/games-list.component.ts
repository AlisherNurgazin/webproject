import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  Games: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadgames();
  }

  loadgames() {
    return this.restApi.getGames().subscribe( data => this.Games = data);
  }
}
