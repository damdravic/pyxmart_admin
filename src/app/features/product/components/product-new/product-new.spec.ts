import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductNew } from './product-new';

describe('ProductNew', () => {
  let component: ProductNew;
  let fixture: ComponentFixture<ProductNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductNew],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
