import { Injectable } from '@angular/core';
import { BehaviorSubject, map, mergeMap, Observable, of, switchMap, tap } from 'rxjs';
import { Task, TaskFilter } from '@business/tasks/models/tasks.model';
import { TasksApiService } from '@business/tasks/services/tasks-api.service';

@Injectable()
export class TasksService {
	constructor(private tasksApiService: TasksApiService) {}

	private static tasksStore = new BehaviorSubject<Task[]>([]);

	private setTasks(tasks: Task[]): void {
		TasksService.tasksStore.next(tasks);
	}

	private getTasks(tasks: Task[]): Observable<Task[]> {
		console.log(tasks);
		if (tasks.length === 0) {
			return this.tasksApiService.getTasks().pipe(tap((tasksData) => this.setTasks(tasksData)));
		} else {
			return of(tasks);
		}
	}

	getTaskList(filterBy: TaskFilter): Observable<Task[]> {
		return TasksService.tasksStore.asObservable().pipe(
			mergeMap((tasks) =>
				this.getTasks(tasks).pipe(
					map((tasks) => {
						if (filterBy === 'All') {
							return tasks;
						} else if (filterBy === 'Completed') {
							return tasks.filter((task) => task.completed);
						} else {
							return tasks.filter((task) => !task.completed);
						}
					})
				)
			)
		);
	}

	getTaskById(taskId: number): Observable<Task> {
		return TasksService.tasksStore.asObservable().pipe(
			mergeMap((tasks) => this.getTasks(tasks)),
			switchMap((tasks) => {
				return tasks.filter((task) => task.id === taskId);
			})
		);
	}
}
