import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfProductsComponent } from './table-of-products.component';

describe('TableOfProductsComponent', () => {
  let component: TableOfProductsComponent;
  let fixture: ComponentFixture<TableOfProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOfProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
