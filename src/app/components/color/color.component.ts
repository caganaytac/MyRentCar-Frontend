import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/models/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = []
  currentColor: Color
  emptyColor:Color 
  dataLoaded = false

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColors()
  }

  setCurrentColor(color: Color) {
    this.currentColor = color
  }

  getCurrentColor(color: Color) {
    if (color == this.currentColor) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getColors(): void {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data,
        this.dataLoaded = true
    })
  }
  // clearCurrents(){
  //   if(this.currentColor){
  //     this.currentColor = this.emptyColor
  //   }
  // }
  // getAllColors(){
  //   if(!this.currentColor){
  //     return "list-group-item active"
  //   }else{
  //     return "list-group-item"
  //   }
  // }
}
