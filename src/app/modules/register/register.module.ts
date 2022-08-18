import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


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
    RouterModule.forChild(pagesRoutes),
    SharedModule,
  ],
  providers: [
  ]
})
export class RegisterModule { }
