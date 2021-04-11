import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm: FormGroup;

  constructor( private colorService:ColorService,
    private toastrService: ToastrService,
      private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createColorForm()
  }
  
  createColorForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ['', Validators.required],
    })
  }

  add() {
    if (this.colorAddForm.valid) {
      let brandModel = Object.assign({},this.colorAddForm.value)
      this.colorService.add(brandModel).subscribe(response => {
        console.log(response)
        this.toastrService.success(response.messages, "Success")
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }, responseError => {
        if(responseError.error.Errors.length > 0)
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Exception")
        }
      })
    }
    else {
      this.toastrService.error("Your form is not full", "Atention")
    }
  }
}
