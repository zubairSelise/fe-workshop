import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksCardComponent } from './components/tasks-card/tasks-card.component';
import { TasksToggleComponent } from './components/tasks-toggle/tasks-toggle.component';

export { TasksListComponent } from './components/tasks-list/tasks-list.component';
export { TasksToggleComponent } from './components/tasks-toggle/tasks-toggle.component';
export { TasksCardComponent } from './components/tasks-card/tasks-card.component';
export { TasksService } from './services/tasks.service';
export * from './models/tasks.model';

export function provideTasks(): EnvironmentProviders {
	return makeEnvironmentProviders([TasksService]);
}
export const TASKS_COMPONENTS = [TasksListComponent, TasksCardComponent, TasksToggleComponent];
