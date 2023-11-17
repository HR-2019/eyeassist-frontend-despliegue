import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['/home/dash']);
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  settings() {
    console.log('Settings');
    this.router.navigate(['/home/settings']);
  }
}
