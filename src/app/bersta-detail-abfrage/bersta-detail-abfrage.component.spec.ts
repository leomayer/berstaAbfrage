import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerstaDetailAbfrageComponent } from './bersta-detail-abfrage.component';

describe('BerstaDetailAbfrageComponent', () => {
	let component: BerstaDetailAbfrageComponent;
	let fixture: ComponentFixture<BerstaDetailAbfrageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BerstaDetailAbfrageComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(BerstaDetailAbfrageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
