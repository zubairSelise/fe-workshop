import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TaskFilter } from '@business/tasks/models/tasks.model';
import { TASKS_FILTERS } from '@shared/constants/common';
import { CommonModule } from '@angular/common';

@Component({
	standalone: true,
	selector: 'app-tasks-toggle',
	templateUrl: './tasks-toggle.component.html',
	styleUrls: ['./tasks-toggle.component.css'],
	imports: [CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksToggleComponent {
	@Output() filterBy = new EventEmitter<TaskFilter>();
	filters: TaskFilter[] = TASKS_FILTERS;
	activeIndex = 0;
	setActiveIndex(filter: TaskFilter, index: number) {
		this.filterBy.emit(filter);
		this.activeIndex = index;
	}
}
