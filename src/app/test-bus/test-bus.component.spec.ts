import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBusComponent } from './test-bus.component';

describe('TestBusComponent', () => {
  let component: TestBusComponent;
  let fixture: ComponentFixture<TestBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
