import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class CardComponent {}
