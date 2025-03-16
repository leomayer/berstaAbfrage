import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerstaInput4queryComponent } from './bersta-input4query.component';

describe('BerstaDetailUrlComponent', () => {
	let component: BerstaInput4queryComponent;
	let fixture: ComponentFixture<BerstaInput4queryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BerstaInput4queryComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(BerstaInput4queryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
