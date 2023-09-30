import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '@business/tasks/models/tasks.model';
import { CommonModule } from '@angular/common';

@Component({
	standalone: true,
	imports: [CommonModule],
	selector: 'app-tasks-list',
	templateUrl: './tasks-list.component.html',
	styleUrls: ['./tasks-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	// eslint-disable-next-line @angular-eslint/no-host-metadata-property
	host: {
		class: 'w-full'
	}
})
export class TasksListComponent {
	@Input() set tasks(value: Task[]) {
		this._tasks = value;
	}
	@Output() taskDetail = new EventEmitter<number>();
	_tasks: Task[] = [];

	onDetail(taskId: number) {
		this.taskDetail.emit(taskId);
	}

	taskTrackBy(index: number, task: Task) {
		return task.id;
	}
}
