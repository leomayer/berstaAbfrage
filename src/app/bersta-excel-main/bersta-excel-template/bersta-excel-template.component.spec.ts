import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerstaExcelTemplateComponent } from './bersta-excel-template.component';

describe('BerstaExcelTemplateComponent', () => {
	let component: BerstaExcelTemplateComponent;
	let fixture: ComponentFixture<BerstaExcelTemplateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BerstaExcelTemplateComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(BerstaExcelTemplateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
