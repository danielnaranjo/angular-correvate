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
  public error: string | null;

  constructor(
		private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
			password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
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
