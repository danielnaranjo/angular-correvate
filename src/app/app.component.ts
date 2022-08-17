import { Component } from '@angular/core';
import { MetaService } from "./services/meta.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-boilerplate';

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
  }
  
}
