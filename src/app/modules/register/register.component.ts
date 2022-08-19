import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '@shared/interfaces/user.interface';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { MetaService } from 'src/app/services/meta.service';
import { RegexCommon } from 'src/app/services/regex.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  client: Subscription;
  registerForm : FormGroup;
  public error: string | null;

  constructor(
		private fb: FormBuilder,
    private meta: MetaService,
    private regexCommon: RegexCommon,
    private apiService: ApiService,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
			password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.pattern(regexCommon.numbers)],
      userStatus: ['0']
		});
  }

  ngOnInit(): void {
    this.meta.updateTitle('Register');
  }

  onSubmit() {
    console.log('onSubmit', this.registerForm.value);
    const values: IUser = this.registerForm.value;
    this.client = this.apiService.postData('user', values)
    .subscribe((response) =>{
      console.log('log', response);
      this.router.navigate(['/login'])
      this.registerForm.reset();
    });
  }

  ngOnDestroy(): void {
    this.client.unsubscribe();
  }

}
