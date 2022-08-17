import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'reusable-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() isLoading: boolean = true;
  @Input() customCssStyles: { [klass: string]: any; };
  @Output() returnStatus = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
