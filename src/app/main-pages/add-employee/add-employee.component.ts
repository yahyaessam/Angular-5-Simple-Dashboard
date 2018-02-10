import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {
  GridComponent,
  GridDataResult,
  DataStateChangeEvent,
  SelectableSettings
} from '@progress/kendo-angular-grid';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('addUserForm') addingUserForm: NgForm;
  @ViewChild('searchUser') searchUserForm: NgForm;
  @ViewChild('searchTab') searchTabSelector: ElementRef;
  public searchName:string;
  success: boolean = false;
  selectableSettings = 'multiple';
  public employees: any[] = [{
    name:"Yahya Essam",
    code: 11,
    department:"UI Development",
    birthdate:new Date(29-9-1989),
    gender:"male"
  },
    {
      name: "Mohamed Kamel",
      code: 15,
      department: "Backend Development",
      birthdate: new Date(12-3-1995),
      gender: "male"
    },
    {
      name: "Mona Ahmed",
      code: 112,
      department: "UI Development",
      birthdate: new Date(9-3-1992),
      gender: "female"
    },
    {
      name: "Nora Mohamed",
      code: 143,
      department: "UI Development",
      birthdate: new Date(21-5-1994),
      gender: "female"
    }
    ];
  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'name', operator: 'contains', value: 'm' },
                { field: 'department', operator: 'contains', value:'U'}]
    }
  };
  public gridData: GridDataResult = process(this.employees, this.state);
  public maxDate: Date = new Date(2000,1,1);
  listItems = [
    'UI Development',
    'Back-end Development',
    'Android Development'
  ];
  constructor(private router: Router) { }
  public onTabSelect(e) {
    this.success = false;
  }
  ngOnInit() {
  }

  addUser() {
    console.log(this.addingUserForm.value);
    this.employees.push(this.addingUserForm.value);
    this.success = true;
    setTimeout(function() {
      this.success = false;
      console.log(this.success);
    }, 10000);
    this.addingUserForm.value.clear();

  }
  onUserSearch(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.employees, this.state);
  }
  onNameChange(searchValue: string): void {
    
    this.state.filter.filters[0] = { field: 'name', operator: 'contains', value: searchValue };
    this.gridData = process(this.employees, this.state);
    console.log(this.state);
  }
  onDepartmentChange(searchValue: string) {
    this.state.filter.filters[1] = { field: 'department', operator: 'contains', value: searchValue };
    this.gridData = process(this.employees, this.state);
  }
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.employees, this.state);
    console.log(this.state);
    console.log(this.gridData, "clicked search")
  }

}
