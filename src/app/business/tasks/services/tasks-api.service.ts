import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '@shared/constants/common';
import { Task } from '@business/tasks/models/tasks.model';

@Injectable({
	providedIn: 'root'
})
export class TasksApiService {
	constructor(private httpClient: HttpClient) {}

	getTasks() {
		return this.httpClient.get<Task[]>(`${BASE_API_URL}/todos`);
	}
}
