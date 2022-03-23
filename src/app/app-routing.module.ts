import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AddemployeeComponent } from "./addemployee/addemployee.component";
import { EmployeesComponent } from "./employees/employees.component";

const routes=[
  {path: 'employees', component: EmployeesComponent},
  {path: 'new-employee', component: AddemployeeComponent},
  {path: '**', redirectTo:'/employees'}
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
