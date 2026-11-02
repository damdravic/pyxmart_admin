import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryNew } from './category-new';

describe('CategoryNew', () => {
  let component: CategoryNew;
  let fixture: ComponentFixture<CategoryNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryNew],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
