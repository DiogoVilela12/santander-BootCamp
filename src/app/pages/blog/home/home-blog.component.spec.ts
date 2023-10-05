import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogComponent } from './home-blog.component';

describe('HomeBlogComponent', () => {
  let component: HomeBlogComponent;
  let fixture: ComponentFixture<HomeBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBlogComponent]
    });
    fixture = TestBed.createComponent(HomeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
