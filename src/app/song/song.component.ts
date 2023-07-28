import { Component, Input, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
@Input()
props:any;
@ViewChild('audioPlayer') audioPlayer!:ElementRef;
isPlaying:boolean=false;
playPauseLabel:string="Play";
  constructor() { }

  ngOnInit(): void {
  }

  playPause(song:any){
    if(this.isPlaying){
      this.pause();
      this.playPauseLabel="Play";
    
    }else{
this.play(song);
this.playPauseLabel="Pause";

    }
    this.isPlaying=!this.isPlaying;
  }
  play(song:any){
    this.audioPlayer.nativeElement.src=song.preview;
this.audioPlayer.nativeElement.play();
  }

  pause(){
    this.audioPlayer.nativeElement.pause();
      }
}
