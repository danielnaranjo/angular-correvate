import { Component } from '@angular/core';
import { MetaService } from "./services/meta.service";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: [`* { margin: 0; padding: 0; }`]
})
export class AppComponent {
  title = 'angular-boilerplate';

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
  }
  
}
