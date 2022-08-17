import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTemplateModule } from '../../templates/templates.module';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

export const pagesRoutes: Routes = [
	{
		path: '',
		component: PagesComponent,
  }
];

@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    CommonModule, 
    CustomTemplateModule, 
    RouterModule.forChild(pagesRoutes),
    SharedModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
  ],
  providers: []
})
export class PagesModule { }
