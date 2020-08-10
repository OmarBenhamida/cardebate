import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelmarqueComponent } from './modelmarque.component';

describe('ModelmarqueComponent', () => {
  let component: ModelmarqueComponent;
  let fixture: ComponentFixture<ModelmarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelmarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelmarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
