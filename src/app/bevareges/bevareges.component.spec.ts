import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevaregesComponent } from './bevareges.component';

describe('BevaregesComponent', () => {
  let component: BevaregesComponent;
  let fixture: ComponentFixture<BevaregesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevaregesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BevaregesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
