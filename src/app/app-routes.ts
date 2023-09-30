import { Routes } from '@angular/router';
import { provideTasks } from '@business/tasks';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'tasks',
		pathMatch: 'full'
	},
	{
		path: 'tasks',
		providers: [provideTasks()],
		loadComponent: () =>
			import('./pages/tasks/tasks-list-page/tasks-list-page.component').then(
				(sc) => sc.TasksListPageComponent
			)
	},
	{
		path: 'tasks/:id',
		providers: [provideTasks()],
		loadComponent: () =>
			import('./pages/tasks/tasks-detail-page/tasks-detail-page.component').then(
				(sc) => sc.TasksDetailPageComponent
			)
	},
	{
		path: '404',
		loadComponent: () =>
			import('./pages/not-found-page/not-found-page.component').then(
				(sc) => sc.NotFoundPageComponent
			)
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full'
	}
];
export const APP_ROUTES = routes;
