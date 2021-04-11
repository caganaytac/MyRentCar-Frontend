import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserProfilePhoto } from 'src/app/models/userProfilePhoto';
import { UserProfilePhotoService } from 'src/app/services/user-profile-photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile-photo',
  templateUrl: './edit-profile-photo.component.html',
  styleUrls: ['./edit-profile-photo.component.css']
})
export class EditProfilePhotoComponent implements OnInit {

  userProfilePhoto:UserProfilePhoto

  constructor(private userProfilePhotoService: UserProfilePhotoService,
    private userService: UserService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
  }

  getPhoto(){
    this.userProfilePhotoService.getByUserId(this.userService.getUserId()).subscribe(response => {
      response.data = this.userProfilePhoto
    })
  }

  deleteProfilePhoto(){
    this.userProfilePhotoService.delete(this.userProfilePhoto).subscribe(response => {
      this.toastrService.success(response.messages,"Success")
    })
  }
  updateProfilePhoto(){
    this.userProfilePhotoService.delete(this.userProfilePhoto).subscribe(response => {
      this.toastrService.success(response.messages,"Success")
    })
  }
}