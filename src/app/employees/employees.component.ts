import {  Component, Injectable, OnInit } from '@angular/core';
import { EmployeemanagerService } from '../employeemanager.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

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

  constructor(public service: EmployeemanagerService, public router:Router) {

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
    const container = document.getElementById('container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'update') {
      button.setAttribute('data-target', '#update');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#delete');
    }
    this.employee = employee;
    container?.appendChild(button);
    button.click();
  }

  onSubmit(form:any) {
    this.service.updateEmployee(form.value)
    this.getEmployees()
  }

  confirmDelete(id:number) {
    this.service.deleteEmployee(id)
    this.getEmployees()
  }
}
