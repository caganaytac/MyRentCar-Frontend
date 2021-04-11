import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PasswordChangeModel } from 'src/app/models/passwordChange';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordUpdateForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createPasswordUpdateForm();
  }

  createPasswordUpdateForm(){
    this.passwordUpdateForm = this.formBuilder.group({
      oldPassword: ["", Validators.required],
      newPassword: ["", Validators.required],
    })
  }

  update(){
    if(this.passwordUpdateForm.valid){
      this.passwordUpdateForm.addControl("id",new FormControl(this.userService.getUserId()))
      let passwordModel:PasswordChangeModel = Object.assign({},this.passwordUpdateForm.value)
      this.authService.changePassword(passwordModel).subscribe(response => {
        this.toastrService.success(response.messages,"Success")
        setTimeout(function(){
          location.reload()
        },400)
      },responseError => {
        this.toastrService.error(responseError.error.message,"Attention")

      })
    }else{
      this.toastrService.error("The form is missing.","Attention")
    }
  }
}
