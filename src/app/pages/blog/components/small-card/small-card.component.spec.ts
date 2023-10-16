import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardComponent } from './small-card.component';

describe('SmallCardComponent', () => {
  let component: SmallCardComponent;
  let fixture: ComponentFixture<SmallCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallCardComponent]
    });
    fixture = TestBed.createComponent(SmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
