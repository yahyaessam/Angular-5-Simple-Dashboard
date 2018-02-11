import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { fadeOut } from '../../router.animations';
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
  /* Initial dummy data for employees */
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
    take: 8,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'name', operator: 'contains', value: 'm' }]
    }
  };
  public gridData: GridDataResult = process(this.employees, this.state);
  public maxDate: Date = new Date(2000,1,1);
  public filterName = '';
  public filterDepartment = '';
  listItems = [
    'UI Development',
    'Back-end Development',
    'Android Development'
  ];
  constructor() { }
  public onTabSelect(e) {
    this.success = false;
    console.log(this.gridData);
    this.gridData = process(this.employees, this.state);
  }
  ngOnInit() {}
  /* Add New Employee Function 
  This will Push new employee data into employees Array
  */
  addUser() {
    console.log(this.addingUserForm.value);
    this.employees.push(this.addingUserForm.value);
    this.success = true;
    this.addingUserForm.reset();
  }
  onStartAdd() {
    this.success = false;
  }
  /* Build in Filter of Kendo Grid */
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.employees, this.state);
  }

}
