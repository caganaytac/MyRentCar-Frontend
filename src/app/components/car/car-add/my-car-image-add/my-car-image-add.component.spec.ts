import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarImageAddComponent } from './my-car-image-add.component';

describe('MyCarImageAddComponent', () => {
  let component: MyCarImageAddComponent;
  let fixture: ComponentFixture<MyCarImageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCarImageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
