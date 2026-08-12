import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionAuth } from './union-auth';

describe('UnionAuth', () => {
  let component: UnionAuth;
  let fixture: ComponentFixture<UnionAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnionAuth],
    }).compileComponents();

    fixture = TestBed.createComponent(UnionAuth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
