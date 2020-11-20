import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { Game } from 'src/app/models/game';
import { VideoGame } from 'src/app/models/video-game';
import { VideoGameService } from 'src/app/services/video-game.service';
import { ConfirmParameters, DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.scss']
})
export class MainOverviewComponent implements OnInit, AfterViewInit {

  title = "List Popular Videos Game";
  boardName = "Popular Videos Game In 2019";
  columnName = "List";

  resultsLength = 50;
  isLoadingResults = true;
  isRateLimitReached = false;

  videoGameColumns: string[] = ['ranking', 'title', 'releaseDate',
  'categories'];

  videoGameList: VideoGame[];

  gameList: Game[];
  
  dataSource = new MatTableDataSource<VideoGame>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private videoGameService: VideoGameService,
    protected dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchVideoGames();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public fetchVideoGames(): void {
    this.videoGameService
    .getVideoGamesDetails()
    .subscribe(data => {
      this.videoGameList = data.results;
      this.dataSource = new MatTableDataSource<VideoGame>(this.videoGameList);
      console.log(this.videoGameList)
    })
  }

  /* public onRowClicked(row: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      titleKey: 'Confirm Dialog',
      imageUrl: row.background_image
    } as ConfirmParameters;
    const dialogRef = this.openConfirmDialog(dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === DetailsComponent.OK_BUTTON) {
        console.log('vfd');
      }
    });
    console.log('Row clicked: ', row.background_image);
  } */

  openDialog(row: any): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: {titleKey: row.name, imageUrl: row.background_image, games: row.genres}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /**
   * Open a Confirmation dialog box.
   * @param dialogConfig the dialog configuration
   * @returns the new dialog
   */
  protected openConfirmDialog(dialogConfig: MatDialogConfig): any {
    return this.dialog.open(DetailsComponent, dialogConfig);
  }

}
