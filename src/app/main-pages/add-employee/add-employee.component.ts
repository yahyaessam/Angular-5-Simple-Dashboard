import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('addUserForm') addingUserForm: NgForm;
  @ViewChild('searchUser') searchUserForm: NgForm;
  public gridData: any[] = [];
  public maxDate: Date = new Date(2000,1,1);
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

  addUser() {
    console.log(this.addingUserForm.value);
  }
  onUserSearch() {
    console.log(this.searchUserForm.value);
  }

}
