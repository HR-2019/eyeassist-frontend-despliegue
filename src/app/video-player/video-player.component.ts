import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from './video/video.service';

declare var YT: any;
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent {
  url = '';
  player: any;
  regExp =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  constructor(
    private router: Router,
    private videoService: VideoService
  ) {}
  handleUrlChange() {
    if (this.url) {
      if (this.url.trim().match(this.regExp)) {
        console.log('es url de youtube');
        if (this.player) {
          this.player.loadVideoById(this.getYouTubeVideoIdFromUrl(this.url));
          this.player.stopVideo();
        } else {
          this.createPlayer(this.getYouTubeVideoIdFromUrl(this.url));
        }
        return;
      }
    } else {
      if (this.player) {
        this.player.destroy();
        this.player = null;
      }
    }
  }
  sendVideo() {
    if (this.url.trim().match(this.regExp)) {
      const video_id = this.getYouTubeVideoIdFromUrl(this.url);
      this.videoService.createVideoDescription(video_id).subscribe(response => {
        if (response.status == 200) {
          this.router.navigate(['/home/dash']);
        }
      });
    }
  }

  createPlayer(id: string) {
    this.player = new YT.Player('player', {
      height: '70%',
      width: '100%',
      videoId: id,
      playerVars: {
        autoplay: 0,
      },
      events: {},
    });
  }
  getYouTubeVideoIdFromUrl = (url: string) => {
    // Our regex pattern to look for a YouTube ID
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

    // Match the URL with the regex
    const match = url.match(regExp);

    // The grouped/matched digits from the regex
    return match ? match[2] : '';
  };
}
