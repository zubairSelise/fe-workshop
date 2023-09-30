import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TasksService } from '@business/tasks/services/tasks.service';
import { Task, TaskFilter } from '@business/tasks/models/tasks.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SHARED_COMPONENTS } from '@shared/index';
import { CommonModule } from '@angular/common';
import { TASKS_COMPONENTS } from '@business/tasks';

@Component({
	standalone: true,
	imports: [CommonModule, SHARED_COMPONENTS, TASKS_COMPONENTS],
	selector: 'app-tasks-list-page-page',
	templateUrl: './tasks-list-page.component.html',
	styleUrls: ['./tasks-list-page.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListPageComponent implements OnInit {
	defaultFilter: TaskFilter = 'All';
	tasks$: Observable<Task[]>;
	constructor(
		private tasksService: TasksService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.tasks$ = this.tasksService.getTaskList(this.defaultFilter);
	}

	onFilterBy(filter: TaskFilter) {
		this.tasks$ = this.tasksService.getTaskList(filter);
	}

	routeToDetail(taskId: number) {
		this.router.navigate(['tasks', taskId]);
	}
}
