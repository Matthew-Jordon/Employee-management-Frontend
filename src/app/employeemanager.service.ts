import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeesComponent } from './employees/employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeemanagerService {

  constructor(private http: HttpClient) {}

  apiUrl = 'http://172.28.144.1:8080/employee/'

  public  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}all`)
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}add`, employee)
  }

  public updateEmployee(employee: Employee) {
    return this.http.put(`${this.apiUrl}update`, employee)
  }

  public findEmployee(id:number) {
    return this.http.get(`${this.apiUrl}find/${id}`)
  }

  public deleteEmployee(id:number):Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}delete/${id}`)
  }

}


