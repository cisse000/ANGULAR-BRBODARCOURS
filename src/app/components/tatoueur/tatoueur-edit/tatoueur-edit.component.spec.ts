import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatoueurEditComponent } from './tatoueur-edit.component';

describe('TatoueurEditComponent', () => {
  let component: TatoueurEditComponent;
  let fixture: ComponentFixture<TatoueurEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatoueurEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TatoueurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
