import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUrlComponent } from './new-url.component';

describe('NewUrlComponent', () => {
  let component: NewUrlComponent;
  let fixture: ComponentFixture<NewUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
