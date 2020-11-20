import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { MainOverviewComponent } from './components/main-overview/main-overview.component';
import { VideoGameService } from './services/video-game.service';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainOverviewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    
    MatToolbarModule, MatTableModule, MatPaginatorModule,
    MatProgressSpinnerModule, HttpClientModule, MatDialogModule,
  ],
  providers: [VideoGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
