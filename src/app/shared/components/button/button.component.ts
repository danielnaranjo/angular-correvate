import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'reusable-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ReusableButtonComponent {

  @Input() label: string = 'Aceptar';
  @Input() inProgress: string = 'Por favor, espere...';
  @Input() isDisabled: boolean = true;
  @Input() isStyled: any = '';
  @Output() returnStatus = new EventEmitter<boolean>();

  public disabled: boolean = false;
  public isLoading: boolean = false;

  isAction() {
    this.disabled = false;
    this.isLoading = true;
    this.returnStatus.emit(true);

    setTimeout(() => {
      this.disabled = true;
      this.isLoading = false;
      this.returnStatus.emit(false);
    }, 5000);
  }

}
