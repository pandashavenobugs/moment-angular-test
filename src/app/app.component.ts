import { Component } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date:any;
  title = 'momentTest';
  constructor(){
    const now = new Date().getTime()
    moment.locale('tr')
    this.date = moment(now).format('llll');

  }
}
