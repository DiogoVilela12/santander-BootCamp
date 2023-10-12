import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePokeComponent } from './more-poke.component';

describe('MorePokeComponent', () => {
  let component: MorePokeComponent;
  let fixture: ComponentFixture<MorePokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorePokeComponent]
    });
    fixture = TestBed.createComponent(MorePokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
