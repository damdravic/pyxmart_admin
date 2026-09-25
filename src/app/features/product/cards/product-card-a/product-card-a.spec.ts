import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardA } from './product-card-a';

describe('ProductCardA', () => {
  let component: ProductCardA;
  let fixture: ComponentFixture<ProductCardA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
