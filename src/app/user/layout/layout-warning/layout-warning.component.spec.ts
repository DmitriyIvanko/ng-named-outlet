import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWarningComponent } from './layout-warning.component';

describe('LayoutWarningComponent', () => {
  let component: LayoutWarningComponent;
  let fixture: ComponentFixture<LayoutWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
