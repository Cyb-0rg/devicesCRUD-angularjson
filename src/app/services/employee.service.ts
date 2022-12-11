import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = 'http://localhost:5050/posts';

  constructor(private http: HttpClient) {}

  getDevices() {
    return this.http.get<Device[]>(this.baseUrl);
  }

  postDevice(device: Device) {
    return this.http.post<Device>(this.baseUrl, device);
  }

  deleteDevice(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  postEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  //I am here 


}
