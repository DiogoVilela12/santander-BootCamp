import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeComponent } from './poke.component';

describe('PokeComponent', () => {
  let component: PokeComponent;
  let fixture: ComponentFixture<PokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeComponent]
    });
    fixture = TestBed.createComponent(PokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
