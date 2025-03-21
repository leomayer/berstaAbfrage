import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerstaPreisDiffComponent } from './bersta-preis-diff.component';

describe('BerstaPreisDiffComponent', () => {
	let component: BerstaPreisDiffComponent;
	let fixture: ComponentFixture<BerstaPreisDiffComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BerstaPreisDiffComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(BerstaPreisDiffComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
