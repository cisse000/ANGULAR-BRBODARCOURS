import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatoueurComponent } from './tatoueur.component';

describe('TatoueurComponent', () => {
  let component: TatoueurComponent;
  let fixture: ComponentFixture<TatoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatoueurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TatoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
