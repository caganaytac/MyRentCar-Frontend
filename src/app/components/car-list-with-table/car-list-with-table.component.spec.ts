import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListWithTableComponent } from './car-list-with-table.component';

describe('CarListWithTableComponent', () => {
  let component: CarListWithTableComponent;
  let fixture: ComponentFixture<CarListWithTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarListWithTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListWithTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
