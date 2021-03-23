import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSummaryComponent } from './color-summary.component';

describe('ColorSummaryComponent', () => {
  let component: ColorSummaryComponent;
  let fixture: ComponentFixture<ColorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
