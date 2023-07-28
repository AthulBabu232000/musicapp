import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { SongComponent } from './song/song.component';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatDividerModule,
    MatInputModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
