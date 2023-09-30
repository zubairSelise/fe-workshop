import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SHARED_COMPONENTS } from '@shared/index';

@Component({
	standalone: true,
	imports: [SHARED_COMPONENTS],
	selector: 'app-not-found-page',
	templateUrl: './not-found-page.component.html',
	styleUrls: ['./not-found-page.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent {}
