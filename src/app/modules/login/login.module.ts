import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MaterialModulesList } from 'src/app/shared/components/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const pagesRoutes: Routes = [
	{
		path: '',
		component: LoginComponent,
  }
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(pagesRoutes),
    SharedModule,
    MaterialModulesList,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ]
})
export class LoginModule { }
