import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-create',
  templateUrl: './games-create.component.html',
  styleUrls: ['./games-create.component.scss']
})
export class GamesCreateComponent implements OnInit {
  @Input() gamesDetails = { id: '', name: '', price: 0};

  constructor(public restApi: RestApiService, public router: Router) { }
  ngOnInit() {
  }

  addGames() {
    this.restApi.createGames(this.gamesDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/games-list']);
      });
  }

}
