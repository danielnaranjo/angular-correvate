import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  public fields: any;

  constructor(
		private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
			password: ['']
		});
  }

  ngOnInit(): void {
    console.log('[form]', this.fields);
  }

  onSubmit() {
    console.log('onSubmit');
  }

  returnResult(event: any) {
    console.log('returnResult', event);
  }

}
