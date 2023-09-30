export type Task = {
	id: number;
	title: string;
	userId: number;
	completed: boolean;
};
export type TaskFilter = 'All' | 'Pending' | 'Completed';
