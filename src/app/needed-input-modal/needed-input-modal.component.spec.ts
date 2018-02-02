import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeededInputModalComponent } from './needed-input-modal.component';

describe('NeededInputModalComponent', () => {
  let component: NeededInputModalComponent;
  let fixture: ComponentFixture<NeededInputModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeededInputModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeededInputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
