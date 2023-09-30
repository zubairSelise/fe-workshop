import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TasksService } from '@business/tasks/services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '@business/tasks/models/tasks.model';
import { CommonModule } from '@angular/common';
import { SHARED_COMPONENTS } from '@shared/index';
import { TASKS_COMPONENTS } from '@business/tasks';

@Component({
	standalone: true,
	imports: [CommonModule, SHARED_COMPONENTS, TASKS_COMPONENTS],
	selector: 'app-tasks-detail-page-page',
	templateUrl: './tasks-detail-page.component.html',
	styleUrls: ['./tasks-detail-page.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksDetailPageComponent implements OnInit {
	task$: Observable<Task>;
	constructor(
		private tasksService: TasksService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		const taskId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
		if (taskId) {
			this.task$ = this.tasksService.getTaskById(taskId);
		}
	}
}
