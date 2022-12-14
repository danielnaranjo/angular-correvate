import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


export const pagesRoutes: Routes = [
	{
		path: '',
		component: PagesComponent,
  }
];

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(pagesRoutes),
    SharedModule,
  ],
  providers: [
  ]
})
export class PagesModule { }
