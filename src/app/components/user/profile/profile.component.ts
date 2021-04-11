import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CreditCard } from 'src/app/models/creditCard';
import { UserProfilePhotoService } from 'src/app/services/user-profile-photo.service';
import { UserProfilePhoto } from 'src/app/models/userProfilePhoto';
import { environment } from 'src/environments/environment';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { UserCreditScoreService } from 'src/app/services/user-credit-score.service';
import { UserCreditScore } from 'src/app/models/userCreditScore';
import { EditProfilePhotoComponent } from './edit-profile-photo/edit-profile-photo.component';
import { AddProfilePhotoComponent } from './add-profile-photo/add-profile-photo.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  creditCards: CreditCard[]
  userProfilePhoto: UserProfilePhoto
  user: User
  userCreditScore: UserCreditScore
  customer: Customer
  userForm: FormGroup
  customerForm: FormGroup
  baseUrl = environment.backend.baseURL;


  constructor(private userService: UserService,
    private userCreditScoreService: UserCreditScoreService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private dialogService: DialogService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private creditCardService: CreditCardService,
    private userProfilePhotoService: UserProfilePhotoService) { }

  ngOnInit(): void {
    this.getUser()
    this.getCreditCardsByUser()
    this.getUserProfilePhoto()
    this.getCreditScoreByUser()
    this.createUserForm()
  }

  createUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
    })
  }

  getUser() {
    this.userService.getUserById(this.userService.getUserId()).subscribe(response => {
      this.user = response.data
    })
  }

  getUserProfilePhoto() {
    this.userProfilePhotoService.getByUserId(this.userService.getUserId()).subscribe(response => {
      this.userProfilePhoto = response.data
    })
  }

  getCreditCardsByUser() {
    this.creditCardService.getByUserId(this.userService.getUserId()).subscribe(response => {
      this.creditCards = response.data
    })
  }
  getCreditScoreByUser() {
    this.userCreditScoreService.getByUserId(this.userService.getUserId()).subscribe(response => {
      this.userCreditScore = response.data
    })
  }

  updateUser() {
    if (this.userForm.valid) {
      this.userForm.addControl("id", new FormControl(this.user.id))
      let userModel = Object.assign({}, this.userForm.value)
      this.userService.updateUser(userModel).subscribe(response => {
        this.toastrService.success(response.messages, "Success")
        setTimeout(function () {
          location.reload()
        }, 400)
      })
    } else {
      this.toastrService.error("The form is missing.", "Attention")
    }

  }

  deleteUser() {
    if (window.confirm("Are you sure about delete your account?")) {
      this.localStorageService.removeItem("token")
      this.userService.deleteUser(this.user).subscribe(response => {
        this.toastrService.success(response.messages, "Success")
        this.router.navigate([""])
      })
    }
  }

  updatePassword() {
    const ref = this.dialogService.open(ChangePasswordComponent, {});
  }

  PhotoEditTransaction() {
    const ref = this.dialogService.open(EditProfilePhotoComponent, {});
  }

  PhotoAddTransaction() {
    const ref = this.dialogService.open(AddProfilePhotoComponent, {});
  }

}
