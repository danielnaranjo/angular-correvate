import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MaterialModulesList } from 'src/app/shared/components/material';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

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
    MaterialModulesList,
    PipesModule,
  ],
  providers: [
  ]
})
export class AdminModule { }
