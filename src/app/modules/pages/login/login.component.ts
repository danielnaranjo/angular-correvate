import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = new UntypedFormGroup({});
  public fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'E-mail',
        placeholder: 'E-mail',
        required: true,
        type: 'email'
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Contraseña',
        placeholder: 'Contraseña',
        required: true,
        type: 'password'
      }
    },
  ];

  constructor() { }

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
