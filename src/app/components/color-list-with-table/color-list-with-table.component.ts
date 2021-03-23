import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/models/color';

@Component({
  selector: 'app-color-list-with-table',
  templateUrl: './color-list-with-table.component.html',
  styleUrls: ['./color-list-with-table.component.css']
})
export class ColorListWithTableComponent implements OnInit {

  colors:Color[]
  filterText = ""
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors()
  }

  getColors(): void {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }
}
