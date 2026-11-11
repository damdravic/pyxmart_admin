import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandNew } from './brand-new';

describe('BrandNew', () => {
  let component: BrandNew;
  let fixture: ComponentFixture<BrandNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandNew],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
