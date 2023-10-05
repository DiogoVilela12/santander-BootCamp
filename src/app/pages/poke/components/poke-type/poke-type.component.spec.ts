import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTypeComponent } from './poke-type.component';

describe('PokeTypeComponent', () => {
  let component: PokeTypeComponent;
  let fixture: ComponentFixture<PokeTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeTypeComponent]
    });
    fixture = TestBed.createComponent(PokeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
