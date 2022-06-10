import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalCellRendererComponent } from './medal-cell-renderer.component';

describe('MedalCellRendererComponent', () => {
  let component: MedalCellRendererComponent;
  let fixture: ComponentFixture<MedalCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedalCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
