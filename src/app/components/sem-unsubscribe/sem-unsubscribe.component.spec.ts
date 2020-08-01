import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemUnsubscribeComponent } from './sem-unsubscribe.component';

describe('SemUnsubscribeComponent', () => {
  let component: SemUnsubscribeComponent;
  let fixture: ComponentFixture<SemUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
