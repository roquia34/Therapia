import { Component  } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-patient-join-options',
  templateUrl: './patient-join-options.component.html',
  styleUrl: './patient-join-options.component.scss'
})
export class PatientJoinOptionsComponent {

  joinLink: string = '';
  requestStatus: string = '';
  verificationStatus: string = '';

  constructor(private http: HttpClient) {}

  submitLink() {
    this.http.post('https://api.example.com/join', { link: this.joinLink }).subscribe(response => {
      this.requestStatus = 'Request Sent!';
    }, error => {
      this.requestStatus = 'Error sending request';
    });
  }

  sendJoinRequest() {
    this.http.post('https://api.example.com/request', {}).subscribe(response => {
      this.requestStatus = 'Request Sent!';
    }, error => {
      this.requestStatus = 'Failed to send request';
    });
  }

  verifyAccount() {
    this.http.get('https://api.example.com/verify').subscribe(response => {
      this.verificationStatus = 'Verified!';
    }, error => {
      this.verificationStatus = 'Verification failed';
    });
  }
}