import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatoueurCreateComponent } from './tatoueur-create.component';

describe('TatoueurCreateComponent', () => {
  let component: TatoueurCreateComponent;
  let fixture: ComponentFixture<TatoueurCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatoueurCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TatoueurCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
