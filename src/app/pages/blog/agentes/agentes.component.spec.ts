import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentesComponent } from './agentes.component';

describe('AgentesComponent', () => {
  let component: AgentesComponent;
  let fixture: ComponentFixture<AgentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentesComponent]
    });
    fixture = TestBed.createComponent(AgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
