import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  constructor() {}

  sendEmail(customer: string, data: any) {
    console.log('Sending email...', customer, data);
    return true;
  }
  
}
