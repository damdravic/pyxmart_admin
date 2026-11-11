import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandService } from '../../services/brand-service';
import { Brand } from '../../models/brand';

@Component({
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  selector: 'app-brand-new',
  styleUrl: './brand-new.css',
  templateUrl: './brand-new.html',
})
export class BrandNew {


  brandForm = new FormGroup({
    id: new FormControl(0, { nonNullable: true }),
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    slug: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl<string | null>(null),
    active: new FormControl(true, { nonNullable: true }),
    logoUrl: new FormControl<string | null>(null),
    logoUrlSecondary: new FormControl<string | null>(null)
  });


  editableBrand = input<Brand | null>(null);
  editMode = signal<Boolean>(false)

  constructor() {
    effect(() => {
      const brand = this.editableBrand();

      if (brand !== null) {
        this.setBrandForm(brand);
        this.editMode.set(true);
      } else {
        this.resetBrandForm();
        this.selectedLogo.set(null);
      }
    });
  }

  resetBrandForm() {
    this.brandForm.reset({
      name: '',
      slug: '',
      description: null,
      active: true,
      logoUrl: null,
      logoUrlSecondary: null
    });
  }

  setBrandForm(brand: Brand) {
    this.brandForm.patchValue({
      id: brand.id,
      name: brand.name,
      slug: brand.slug,
      description: brand.description,
      active: brand.active,
      logoUrl: brand.logoUrl,
      logoUrlSecondary: brand.logoUrlSecondary
    })

  }



  selectedLogo = signal<File | null>(null);
  closeModal = output<void>();
  errMessage = signal<string | null>(null);
  brandService = inject(BrandService);




  onLogoSelected(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedLogo.set(input.files[0])
    }
  }

  onSubmit() {
    if (this.brandForm.invalid) {
      this.brandForm.markAllAsTouched();
      return;
    }

    const brand = this.brandForm.getRawValue();
    const logo = this.selectedLogo();


    if (logo) {

      const logoFd = new FormData();
      logoFd.append('file', logo);


      this.brandService.saveLogo(logoFd).subscribe({
        next: (response) => {
          //if logo image is saved successfully

          brand.logoUrl = response.data.logoUrl;
          if (this.editMode() == true) {
            this.editBrand(brand)
          } else {
            this.saveBrand(brand);
          }


        },
        error: (err) => {
          this.resetBrandForm();
          this.errMessage = err.error.message;
        }
      });
    } else {

      if (this.editMode() == true) {
            this.editBrand(brand)
          } else {
            this.saveBrand(brand);
          }

      this.resetBrandForm();
    }
  }
  editBrand(brand : Brand) {
    this.brandService.editBrand(brand).subscribe({
      next : (Response) => {
           this.closeDialog();
        this.resetBrandForm();
      },
      error : (err) => {
        this.errMessage = err.error.message;
      }
    })
  }

  saveBrand(brand: Brand) {
    console.log("save Brand");
    this.brandService.addNewBrand(brand).subscribe({
      next: (response) => {
        this.closeDialog();
        this.resetBrandForm();
      },
      error: (err) => {
        this.errMessage = err.error.message;
      }
    })
  }

  closeDialog() {
    this.closeModal.emit();
  }








}
function setBrandForm(brand: any) {
  throw new Error('Function not implemented.');
}

