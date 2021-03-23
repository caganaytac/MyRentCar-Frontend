import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListWithTableComponent } from './brand-list-with-table.component';

describe('BrandListWithTableComponent', () => {
  let component: BrandListWithTableComponent;
  let fixture: ComponentFixture<BrandListWithTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandListWithTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandListWithTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
