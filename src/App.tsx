import { useState } from "react";
import "./App.css";
import { TaskCard } from "./Components/TaskCard";
import { tasks as initialTasks, statuses, Task } from "./Types/data-tasks";

function App() {
	const [tasks, setTasks] = useState<Task[]>(initialTasks);
	const columns = statuses.map((status) => {
		const tasksInColumn = tasks.filter((task) => task.status === status);
		return {
			title: status,
			tasks: tasksInColumn,
		};
	});

	const updateTaskPoints = (task: Task, points: number) => {
		const updatedTasks = tasks.map((t) => {
			if (t.id === task.id) {
				return {
					...t,
					points,
				};
			}
			return t;
		});
		setTasks(updatedTasks);
	};

	return (
		<div className="flex divide-x">
			{columns.map((column) => (
				<div>
					<div className="flex justify-between text-3xl p-2 font-bold">
						<h2 className="capitalize">{column.title}</h2>
						{column.tasks.reduce(
							(total, task) => total + (task?.points || 0),
							0
						)}
					</div>
					{column.tasks.map((task) => (
						<TaskCard
							task={task}
							updateTaskPoints={updateTaskPoints}
						/>
					))}
				</div>
			))}
		</div>
	);
}

export default App;
