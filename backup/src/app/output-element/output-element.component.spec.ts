import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputElementComponent } from './output-element.component';

describe('OutputElementComponent', () => {
  let component: OutputElementComponent;
  let fixture: ComponentFixture<OutputElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
