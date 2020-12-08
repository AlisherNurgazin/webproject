import { Component } from '@angular/core';
import {ComponentCanDeactivate} from '../exit.about.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements ComponentCanDeactivate{

  saved: boolean = false;
  save(){
    this.saved = true;
  }

  canDeactivate() : boolean | Observable<boolean>{
    if(!this.saved){
      return confirm("Вы хотите покинуть страницу?");
    }
    else{
      return true;
    }
  }
}
