import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalValueRendererComponent } from './total-value-renderer.component';

describe('TotalValueRendererComponent', () => {
  let component: TotalValueRendererComponent;
  let fixture: ComponentFixture<TotalValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalValueRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
