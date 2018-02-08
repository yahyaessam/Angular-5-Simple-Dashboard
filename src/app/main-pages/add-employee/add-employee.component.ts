import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  listItems = [
    'UI Development',
    'Back-end Development',
    'Android Development'
  ]
  constructor() { }
  public onTabSelect(e) {
    console.log(e);
  }
  ngOnInit() {
  }

}
