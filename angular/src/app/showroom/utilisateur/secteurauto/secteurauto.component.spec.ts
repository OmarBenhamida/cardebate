import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurautoComponent } from './secteurauto.component';

describe('SecteurautoComponent', () => {
  let component: SecteurautoComponent;
  let fixture: ComponentFixture<SecteurautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecteurautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecteurautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
