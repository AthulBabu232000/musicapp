import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  song=new Audio();
 nowsing:any;
 songs:any=[];
 songArtist:string='linkin park';
 instruction:boolean=false;

  
  constructor(private http:HttpClient) { }

  getSongs(){
    return this.songs;
  }
  matInputArtist(){
    this.songArtist==''?this.instruction=false:this.instruction=true;
    return this.instruction;
  }

  searchTrack(artist:string) {
    this.songArtist=artist;
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search';
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '0283fcda65mshabdce05ade7000dp19c572jsne517ca433165',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    });
    const params = { q:artist };


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
