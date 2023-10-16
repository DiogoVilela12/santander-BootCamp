import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumCardComponent } from './medium-card.component';

describe('MediumCardComponent', () => {
  let component: MediumCardComponent;
  let fixture: ComponentFixture<MediumCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediumCardComponent]
    });
    fixture = TestBed.createComponent(MediumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
