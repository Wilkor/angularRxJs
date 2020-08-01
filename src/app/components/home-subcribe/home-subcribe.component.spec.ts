import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubcribeComponent } from './home-subcribe.component';

describe('HomeSubcribeComponent', () => {
  let component: HomeSubcribeComponent;
  let fixture: ComponentFixture<HomeSubcribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSubcribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubcribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
