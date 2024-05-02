import "./App.css";
import { TaskCard } from "./Components/TaskCard";
import { tasks, statuses } from "./Types/data-tasks";

function App() {
	const columns = statuses.map((status) => {
		const tasksInColumn = tasks.filter((task) => task.status === status);
		return {
			title: status,
			tasks: tasksInColumn,
		};
	});

	return (
		<div className="flex divide-y">
			{columns.map((column) => (
				<div>
					<h1>{column.title}</h1>
					{column.tasks.map((task) => (
						<TaskCard task={task} />
					))}
				</div>
			))}
		</div>
	);
}

export default App;
