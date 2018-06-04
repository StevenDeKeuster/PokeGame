import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepostComponent } from './gamepost.component';

describe('GamepostComponent', () => {
  let component: GamepostComponent;
  let fixture: ComponentFixture<GamepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
