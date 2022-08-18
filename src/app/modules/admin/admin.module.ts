import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


export const pagesRoutes: Routes = [
	{
		path: '',
		component: AdminComponent,
  }
];

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(pagesRoutes),
    SharedModule,
  ],
  providers: [
  ]
})
export class AdminModule { }
