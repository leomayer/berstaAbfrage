import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerstaLoginComponent } from './bersta-login.component';

describe('BerstaLoginComponent', () => {
  let component: BerstaLoginComponent;
  let fixture: ComponentFixture<BerstaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerstaLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerstaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
