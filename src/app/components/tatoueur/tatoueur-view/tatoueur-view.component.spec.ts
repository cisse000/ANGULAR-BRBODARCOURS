import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatoueurViewComponent } from './tatoueur-view.component';

describe('TatoueurViewComponent', () => {
  let component: TatoueurViewComponent;
  let fixture: ComponentFixture<TatoueurViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatoueurViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TatoueurViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
