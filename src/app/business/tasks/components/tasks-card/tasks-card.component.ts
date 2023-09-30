import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Task } from '@business/tasks/models/tasks.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
	standalone: true,
	imports: [CommonModule, CardComponent],
	selector: 'app-tasks-card',
	templateUrl: './tasks-card.component.html',
	styleUrls: ['./tasks-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksCardComponent {
	@Input() task: Task | null;
}
