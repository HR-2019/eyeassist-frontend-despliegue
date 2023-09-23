import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  constructor(private router: Router) {}
  showFiller = false;
  displayedColumns: string[] = ['position', 'status', 'type', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  signOut() {
    localStorage.clear()
    this.router.navigate(['/']);
  }
}

export interface PeriodicElement {
  status: string;
  position: number;
  type: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, status: 'Completed', type: 'video', actions: 'H' },
  { position: 2, status: 'Process', type: 'image', actions: 'He' },
  { position: 3, status: 'Completed', type: 'video', actions: 'Li' },
  { position: 4, status: 'Completed', type: 'video', actions: 'Be' },
  { position: 5, status: 'Completed', type: 'video', actions: 'B' },
  { position: 6, status: 'Completed', type: 'image', actions: 'C' },
  { position: 7, status: 'Completed', type: 'image', actions: 'He' },
  { position: 8, status: 'Completed', type: 'video', actions: 'Li' },
  { position: 9, status: 'Completed', type: 'video', actions: 'Be' },
  { position: 10, status: 'Completed', type: 'video', actions: 'B' },
  { position: 11, status: 'Completed', type: 'image', actions: 'C' },
];
