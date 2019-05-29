import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorouselSlideComponent } from './corousel-slide.component';

describe('CorouselSlideComponent', () => {
  let component: CorouselSlideComponent;
  let fixture: ComponentFixture<CorouselSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorouselSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorouselSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
