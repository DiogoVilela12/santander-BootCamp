import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStationStoreComponent } from './play-station-store.component';

describe('PlayStationStoreComponent', () => {
  let component: PlayStationStoreComponent;
  let fixture: ComponentFixture<PlayStationStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayStationStoreComponent]
    });
    fixture = TestBed.createComponent(PlayStationStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
