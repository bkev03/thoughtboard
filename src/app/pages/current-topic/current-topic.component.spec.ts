import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTopicComponent } from './current-topic.component';

describe('CurrentTopicComponent', () => {
  let component: CurrentTopicComponent;
  let fixture: ComponentFixture<CurrentTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentTopicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
