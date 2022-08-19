import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { MetaService } from 'src/app/services/meta.service';
import { EColumn } from 'src/app/shared/enums/columns.enum';
import { EStatus } from 'src/app/shared/enums/status.enum';
import { IPet } from 'src/app/shared/interfaces/pet.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [],
})
export class AdminComponent implements OnInit, OnDestroy {
  client: Subscription;
  displayedColumns: string[] = [EColumn.ID, EColumn.NAME, EColumn.STATUS];
  dataSource: MatTableDataSource<IPet[]>;
  clickedRows = new Set<IPet>();
  clickedRows$ = new BehaviorSubject(this.clickedRows);
  data: any;
  loader: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private meta: MetaService,
    private apiService: ApiService,
    public dialog: MatDialog,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.meta.updateTitle('Pets CMS');
    this.getData();
    this.getClicked();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this.data.unsubscribe();
    this.client.unsubscribe();
  }

  private getData(status?: EStatus) {
    const params = status !== undefined ? `?status=${status}` : `?status=available&status=pending&status=sold`;
    this.data = this.apiService.getData(`pet/findByStatus${params}`)
    .pipe() 
    .subscribe((response) =>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loader = false;
    });
  } 

  openModal(event: IPet | any) {
    this.clickedRows.add(event);
    this.clickedRows$.next(event);

    const values = {
      //width: '450px',
      data: event
    }
    console.log('openModal', values);
    const dialogRef = this.dialog.open(ModalComponent, values);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private getClicked() {
    this.clickedRows$.asObservable();
  }

  logout() {
    this.client = this.apiService.postData('user/logout', "")
    .subscribe((response) =>{
      console.log('log', response);
      this.router.navigate(['/login', { 'logout' : true }])
    }, (error) => {
      console.error('error', error.status);
      if (error.status === 405) {
        this.router.navigate(['/login', { 'logout' : false }])
      }
    });
  }

}
