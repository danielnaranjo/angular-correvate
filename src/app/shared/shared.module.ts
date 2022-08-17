import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
    declarations: [
        LoadingComponent,
    ],
    exports: [
        LoadingComponent,
    ],
    imports: [
        CommonModule,
        PipesModule,
    ]
})
export class SharedModule { }
