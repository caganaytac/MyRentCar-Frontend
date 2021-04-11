import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilePhotoComponent } from './add-profile-photo.component';

describe('AddProfilePhotoComponent', () => {
  let component: AddProfilePhotoComponent;
  let fixture: ComponentFixture<AddProfilePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfilePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
