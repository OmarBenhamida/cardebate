import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousserieComponent } from './carousserie.component';

describe('CarousserieComponent', () => {
  let component: CarousserieComponent;
  let fixture: ComponentFixture<CarousserieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousserieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
