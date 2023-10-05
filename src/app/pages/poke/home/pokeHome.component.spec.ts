import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeHomeComponent } from './pokeHome.component';

describe('PokeComponent', () => {
  let component: PokeHomeComponent;
  let fixture: ComponentFixture<PokeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeHomeComponent]
    });
    fixture = TestBed.createComponent(PokeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
