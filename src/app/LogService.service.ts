import { Injectable } from '@angular/core';
@Injectable()

export class LogService {
  log(msg: any): void {
    console.log(new Date() + ': ' + JSON.stringify(msg));
  }
}