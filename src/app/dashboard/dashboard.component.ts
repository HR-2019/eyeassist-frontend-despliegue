import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CountService } from './count-service/count-service.service';
import { Video } from '../video-player/video/video.service';
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  videoCount: number = -1;
  imageCount: number = -1;
  videoList: Video[] = [];
  showFiller = false;
  displayedColumns: string[] = ['id', 'codigo', 'status'];
  dataSource = new MatTableDataSource<Video>(this.videoList);
  constructor(
    private router: Router,
    @Inject(CountService) private countService: CountService
  ) {
    countService.getVideoCount().subscribe(response => {
      if (response.status == 200) {
        this.videoCount = (response.body as number)
          ? (response.body as number)
          : 0;
      }
    });

    countService.getImageCount().subscribe(response => {
      if (response.status == 200) {
        this.imageCount = (response.body as number)
          ? (response.body as number)
          : 0;
      }
    });
    countService.getVideoList().subscribe(response => {
      if (response.status == 200) {
        const result = response.body as VideoListResponse;
        this.videoList = result.content;
        this.dataSource = new MatTableDataSource<Video>(this.videoList);
      }
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

export interface PeriodicElement {
  status: string;
  position: number;
  type: string;
  actions: string;
}

export interface VideoListResponse {
  content: Video[];
}
