import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-color-list-with-table',
  templateUrl: './color-list-with-table.component.html',
  styleUrls: ['./color-list-with-table.component.css']
})
export class ColorListWithTableComponent implements OnInit {

  colors:Color[]
  filterText = ""
  constructor(private colorService:ColorService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getColors()
  }

  getColors(): void {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }
  deleteColor(color:Color){
    this.colorService.delete(color).subscribe(response =>{
      this.toastrService.success(response.messages,"Delete Message")
      setTimeout(() => {
        window.location.reload();
      }, 500);
    })
  }
}
