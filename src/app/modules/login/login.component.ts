import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  client: Subscription;
  loginForm : FormGroup;
  public error: string | null;

  constructor(
		private fb: FormBuilder,
    private meta: MetaService,
    private apiService: ApiService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
			password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
		});
  }

  ngOnInit(): void {
    this.meta.updateTitle('Login');
  }

  onSubmit() {
    console.log('onSubmit', this.loginForm.value);
    this.client = this.apiService.getData('user/login', this.loginForm.value)
    .subscribe((response) =>{
      console.log('log', response);
      this.router.navigate(['/admin'])
      this.loginForm.reset();
    });
  }

  ngOnDestroy(): void {
    this.client.unsubscribe();
  }

}
