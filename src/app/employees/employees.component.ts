import {  Component, Injectable, OnInit } from '@angular/core';
import { EmployeemanagerService } from '../employeemanager.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
@Injectable({
  providedIn: 'root'
}
)
export class EmployeesComponent implements OnInit {

  employees!:Employee[]
  employee!:Employee

  constructor(public service: EmployeemanagerService, public router:Router, public dialog:MatDialog) {

   }

  ngOnInit() {
    this.service.employeeschanged.subscribe(()=>{
      this.employees=this.service.employees.slice()
    })
    this.getEmployees()
  }

  getEmployees() {
    this.service.getEmployees()
  }

  searchEmployees(key:string) {
    const results = []
    for (const employee of this.service.employees) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase())!== -1) {
        results.push(employee)
      }
    }
    if (results.length == 0 || !key) {
      this.getEmployees()
    }else{
      this.service.employees=results
      this.service.employeeschanged.next()
    }
  }


  onClick(employee: Employee, mode:string) {
    if (mode == 'update') {
      const dialogRef = this.dialog.open(UpdateDialogComponent, {
        width: '300px',
        data: employee,
    });
    } else {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '300px',
        data: employee,
      });
    }
  }
}
