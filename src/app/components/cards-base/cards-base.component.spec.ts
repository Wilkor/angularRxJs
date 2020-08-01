import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBaseComponent } from './cards-base.component';

describe('CardsBaseComponent', () => {
  let component: CardsBaseComponent;
  let fixture: ComponentFixture<CardsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
