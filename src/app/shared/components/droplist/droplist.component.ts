import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
	selector: 'reusable-droplist',
	templateUrl: './droplist.component.html',
	styleUrls: ['./droplist.component.scss']
})
export class DroplistComponent implements OnInit {
	dropListForm: UntypedFormGroup;
	@Input() dropListLabel: string = 'Selecciona tu empleador';
	@Input() dropListButton: boolean = false;
	@Input() dropListButtonPosition: string = 'bottom';
	@Input() dropListData: IDroplistComponent[] = [];
	@Output() returnSelected = new EventEmitter<IDroplistComponent>();
	public isDisabled: boolean = true;
	public isSafari: boolean = false;

	constructor(
		private fb: UntypedFormBuilder,
		public utilsService: UtilsService,
	) {
		this.dropListForm = this.fb.group({
			dropListInput: ['', Validators.required]
		});
	}

	ngOnInit() {
		this.formChange();
		this.isSafari = this.utilsService.isSafari();
		if (this.isSafari || this.dropListData.length === 1) {
			this.dropListForm.get('dropListInput').patchValue(this.dropListData[0]);
		}
	}

	formChange() {
		this.dropListForm.valueChanges.subscribe(() => {
			this.isDisabled = (this.dropListForm.status === 'VALID') ? false : true;
		});
	}

	dropListAction() {
		if (this.dropListForm.status === 'VALID') {
			const value = this.dropListForm.controls.dropListInput.value;
			this.returnSelected.emit(value);
		}
	}

}

export interface IDroplistComponent {
	name: string;
	id: object | string | number;
	description?: object | string;
	active?: boolean;
}
