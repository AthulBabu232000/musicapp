import { Component, OnInit,ViewChild,ElementRef, Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
 
  song=new Audio();
  nowsing:any;
 songs:any=[];
 songArtist:string='linkin park';
 instruction:boolean=false;


  ngOnInit(): void {
this.searchTrack();
  }

  matInputArtist(){
    this.songArtist==''?this.instruction=false:this.instruction=true;
  }
  

  searchTrack() {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search';
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '0283fcda65mshabdce05ade7000dp19c572jsne517ca433165',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    });
    const params = { q:this.songArtist };


    this.http.get<any>(url, { headers, params })
    .subscribe(
     (response) => {
      this.songs=[];
       const iterators=response['data'];
      this.instruction=true;
       for(let iterator in iterators){
        this.songs.push(iterators[iterator]);
       }

      
       // Process the response data as needed
     },
     (error) => {
       console.error(error);
     }
   );
  }




}
