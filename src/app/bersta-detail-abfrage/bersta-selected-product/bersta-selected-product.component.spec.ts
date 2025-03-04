import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerstaSelectedProductComponent } from './bersta-selected-product.component';

describe('BerstaSelectedProductComponent', () => {
  let component: BerstaSelectedProductComponent;
  let fixture: ComponentFixture<BerstaSelectedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerstaSelectedProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerstaSelectedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
