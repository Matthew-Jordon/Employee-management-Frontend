import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  key!:string
  activeLink:any

  constructor(public employees:EmployeesComponent, public router:Router) {
    console.log(router.isActive('localhost:4200/employees', false))
   }

  ngOnInit(): void {
  }


}
