import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserProfilePhoto } from 'src/app/models/userProfilePhoto';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserProfilePhotoService } from 'src/app/services/user-profile-photo.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  userProfilePhoto:UserProfilePhoto
  user: User
  baseUrl = environment.backend.baseURL
  
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
    private router: Router,
    private userService : UserService,
    private userProfilePhotoService:UserProfilePhotoService
  ) {}

  ngOnInit(): void {
    if(this.isAuth()){
      this.getUserById()
      this.getUserProfilePhoto()
    }
  }

  getUserById() {
    this.userService.getUserById(this.userService.getUserId()).subscribe((response) => {
      this.user = response.data;
    });
  }
  getUserProfilePhoto(){
    this.userProfilePhotoService.getByUserId(this.userService.getUserId()).subscribe(response => {
      this.userProfilePhoto = response.data
    })
  }

  isAuth() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.localStorageService.removeItem('token');
    this.toastrService.success('Successfully was log out.');
    this.router.navigate([""])
    this.user.firstName = ""
  }
}
