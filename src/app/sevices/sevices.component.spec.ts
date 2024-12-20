import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevicesComponent } from './sevices.component';

describe('SevicesComponent', () => {
  let component: SevicesComponent;
  let fixture: ComponentFixture<SevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
