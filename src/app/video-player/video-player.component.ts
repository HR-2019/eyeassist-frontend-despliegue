import { Component } from '@angular/core';

declare var YT: any;
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  url = '';
  player: any;
  handleUrlChange() {
  if (this.url) {
    var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (this.url.trim().match(regExp)) {
      console.log('es url de youtube')
      this.createPlayer(this.getYouTubeVideoIdFromUrl(this.url))
      return
    }
  }
    console.log('no es url de youtube')
  }

  createPlayer(id: string) {
    this.player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: id,
            events: {}
          });
  }
  getYouTubeVideoIdFromUrl = (url: string) => {
    // Our regex pattern to look for a YouTube ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

    // Match the URL with the regex
    const match = url.match(regExp);

    // The grouped/matched digits from the regex
    return match? match[2]: '';
  };
}
