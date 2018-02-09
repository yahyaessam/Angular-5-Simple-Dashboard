import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /* Position properties */
  public windowTop: number = 50;
  public windowLeft: number = 25;
  public latestTop: number = 50;
  public latestLeft: number = 400;
  public tasks1Top: number = 300;
  public tasks1Left: number = 25;
  public tasks2Top: number = 300;
  public tasks2Left: number = 400;
  /* Toggle Properties */
  public dialogOpened: boolean = false;
  public windowOpened: boolean = true;
  public latestOpened: boolean = true;
  public tasks1Opened: boolean = true;
  public tasks2Opened: boolean = true;

  public close(component) {
    this[component + 'Opened'] = false;
  }

  public open(component) {
    this[component + 'Opened'] = true;
  }

  public action(status) {
    console.log(`Dialog result: ${status}`);
    this.dialogOpened = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
