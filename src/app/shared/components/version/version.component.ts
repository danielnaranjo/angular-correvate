import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var require: any;

@Component({
  selector: 'reusable-version',
  template: `{{version}}`,
  styles: []
})
export class VersionComponent implements OnInit {
  // Now, we are using package.json version, remember to update on every release
  version: string = '1.0.2';

  constructor() { }

  ngOnInit() {
    this.version = this.getVersion();
  }

  private getVersion() {
    try {
      const version = require('../../../../../package.json').version;
      return environment.env.includes('prod') ? `${version}` : `${version}-${environment.env}`;
    } catch (err) {
      console.error('version', err);
      return this.version;
    }

  }

}
