import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '@services/api.service';
import { Subscription } from 'rxjs';
import  * as moment from "moment";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  client: Subscription;
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    console.log('ModalComponent', this.data);
  }

  onNoClick(): void {
    console.log('onNoClick', this.dialogRef);
    this.dialogRef.close();
  }

  order() {
    console.log('order');
    const orderTime = moment().format("YYYY-MM-DDTHH:mm:ss").toString() + "Z";
    const order = {
      id: 0,
      petId: this.data.id,
      quantity: 1,
      shipDate: orderTime,
      status: "placed",
      complete: true
    }
    this.client = this.apiService.postData('store/order', order)
    .subscribe((response) =>{
      console.log('log', response);
      this.dialogRef.close();
    });
  }

  ngOnDestroy(): void {
    this.client.unsubscribe();
  }
}
