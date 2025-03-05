import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerstaExcelMainComponent } from './bersta-excel-main.component';

describe('BerstaExcelMainComponent', () => {
	let component: BerstaExcelMainComponent;
	let fixture: ComponentFixture<BerstaExcelMainComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BerstaExcelMainComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(BerstaExcelMainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
