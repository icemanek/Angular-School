import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-error-dialog-component',
  templateUrl: './error-dialog-component.component.html',
  styleUrls: ['./error-dialog-component.component.css']
})
export class ErrorDialogComponentComponent implements OnInit {

description: string;
error: ErrorEvent;

  constructor(private dialogRef: MatDialogRef<ErrorDialogComponentComponent>, private dialog: MatDialog) { 

    }

  ngOnInit(): void {
  }

  openDialog(error: ErrorEvent) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '0',
      left: '50'
  };

  this.dialog.open(ErrorDialogComponentComponent, dialogConfig);
}

  close() {
    this.dialogRef.close();
}

}
