import { Component, OnInit } from '@angular/core';
import { UserProfilePhotoService } from 'src/app/services/user-profile-photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-profile-photo',
  templateUrl: './add-profile-photo.component.html',
  styleUrls: ['./add-profile-photo.component.css']
})
export class AddProfilePhotoComponent implements OnInit {

  constructor(private userProfilePhoto: UserProfilePhotoService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  addProfilePhoto(){
    
  }

}
