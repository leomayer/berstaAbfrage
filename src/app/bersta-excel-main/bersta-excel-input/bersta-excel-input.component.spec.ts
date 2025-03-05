import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerstaExcelInputComponent } from './bersta-excel-input.component';

describe('BerstaExcelInputComponent', () => {
	let component: BerstaExcelInputComponent;
	let fixture: ComponentFixture<BerstaExcelInputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BerstaExcelInputComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(BerstaExcelInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
