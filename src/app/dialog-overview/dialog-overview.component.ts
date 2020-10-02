import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { emptyItem, Item } from '../app.component';


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})

export class DialogOverviewComponent implements OnInit {
  @ViewChild('picker') picker: any;

  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: Date;
  public maxDate: Date;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  public disableMinute = false;
  public hideTime = false;
  public dateControl = new FormControl(null);
  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  item:Item = emptyItem()



  constructor(public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.item = this.data
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addToDoList() {
    this.dialogRef.close(this.item);
  }
}
