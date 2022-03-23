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
  employees!:Employee[];
  employee:any

  constructor(public service: EmployeemanagerService, public router:Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    return this.service.getEmployees().subscribe(
      (response:any)=> {
      this.employees = response
      }, (error:any)=>{
        alert(error.message)
    });
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
    console.log(form.value)
    /* this.service.updateEmployee(form.value).subscribe(
      (response:any)=>{
    },(error)=>{
      alert(error)
    }); */

  }

  confirmDelete(id:number) {
    this.service.deleteEmployee(id).subscribe((response)=>{},(error)=>{
      alert(error.message)
    })
    this.getEmployees()
  }
}
