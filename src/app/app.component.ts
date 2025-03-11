import { BreakpointObserver } from '@angular/cdk/layout';
import { DatePipe } from '@angular/common';
import { Component, OnInit, VERSION, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { AngularTitleComponent } from './angular-title/angular-title.component';

//
import buildInfo from '../assets/buildDate.json';

import { filter } from 'rxjs';

@Component({
	selector: 'app-root',
	imports: [
		AngularTitleComponent,
		DatePipe,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatListModule,
		RouterOutlet,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	title = 'Bersta-Preise: Abfrage & Foodsoft';
	protected readonly buildInfo = buildInfo;
	protected readonly version = VERSION;
	isMobile = true;
	isCollapsed = true;
	activeRoute: string = '';

	navItems = [
		{ label: 'Dashboard', icon: 'house', route: '/dashboard' },
		{ label: 'Suche', icon: 'search', route: '/search' },
		{ label: 'Excel', icon: 'format_list_numbered', route: '/excel' },
		{ label: 'Settings', icon: 'settings', route: '/settings' },
	];

	sidenav = viewChild.required(MatSidenav);

	constructor(
		private observer: BreakpointObserver,
		private router: Router,
	) {
		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: any) => {
			this.activeRoute = event.urlAfterRedirects;
		});
	}

	ngOnInit() {
		this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
			this.isMobile = screenSize.matches;
		});
	}

	selectNavItem(route: string): void {
		// this.sidenav().close();
		// this.toggleMenu();
		this.router.navigate([route]);
	}

	toggleMenu() {
		if (this.isMobile) {
			this.sidenav().toggle();
			this.isCollapsed = false; // On mobile, the menu can never be collapsed
		} else {
			this.sidenav().open(); // On desktop/tablet, the menu can never be fully closed
			this.isCollapsed = !this.isCollapsed;
		}
	}
}
