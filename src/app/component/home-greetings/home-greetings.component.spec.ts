import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGreetingsComponent } from './home-greetings.component';

describe('HomeGreetingsComponent', () => {
  let component: HomeGreetingsComponent;
  let fixture: ComponentFixture<HomeGreetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGreetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
