import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerstaDetailUrlComponent } from './bersta-detail-url.component';

describe('BerstaDetailUrlComponent', () => {
  let component: BerstaDetailUrlComponent;
  let fixture: ComponentFixture<BerstaDetailUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerstaDetailUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerstaDetailUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
