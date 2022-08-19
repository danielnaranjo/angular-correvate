import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModulesList } from 'src/app/shared/components/material';
import { RegexCommon } from 'src/app/services/regex.service';


export const pagesRoutes: Routes = [
	{
		path: '',
		component: RegisterComponent,
  }
];

@NgModule({
  declarations: [
    RegisterComponent,
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
    RegexCommon,
  ]
})
export class RegisterModule { }
