import { Component, OnInit,ViewChild,ElementRef, Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SongsService } from '../services/songs.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,private songService:SongsService) { }
 
  song=new Audio();
  nowsing:any;
 songs!:any[];
 songArtist:string='linkin park';
 instruction:boolean=false;


  ngOnInit(): void {
  this.searchTrack();
  }
 
  searchTrack():Observable<any>{
    this.songService.searchTrack(this.songArtist);
    this.songs=[];
    this.songs=this.songService.getSongs();
    return of(this.songService.searchTrack(this.songArtist))

  }

  matInputArtist(){
    this.instruction=this.songService.matInputArtist()
  }
  

 




}
