import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBoxComponent } from './skill-box.component';

describe('SkillBoxComponent', () => {
  let component: SkillBoxComponent;
  let fixture: ComponentFixture<SkillBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillBoxComponent]
    });
    fixture = TestBed.createComponent(SkillBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
