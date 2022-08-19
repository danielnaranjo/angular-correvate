import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { StatusPipe } from './status.pipe';



@NgModule({
  declarations: [
    StatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusPipe
  ],
  providers: [
    TitleCasePipe
  ]
})
export class PipesModule { }
