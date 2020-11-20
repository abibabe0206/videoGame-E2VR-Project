import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/models/game';

/**
 * A small POJO for the Dialog box parameters.
 */
export class ConfirmParameters {
  /** The Title key. */
  titleKey: string;

  /** The image src. */
  imageUrl: string;

  games: Game[];

  /** The message item name. */
  messageItemName: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  public static readonly OK_BUTTON = 'OK';

  /** Dialog title. */
  title: string;

  /** Dailog message. */
  imageUrl: string;

  games: Game[];

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmParameters) {}

  /**
   * On OK click.
   */
  public onOk() {
    this.dialogRef.close(DetailsComponent.OK_BUTTON);
  }

}
