import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MaterialModulesList } from 'src/app/shared/components/material';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '@shared/pipes/pipes.module';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  exports: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModulesList,
    MatCardModule,
    PipesModule,
  ],
})
export class ModalModule { }
