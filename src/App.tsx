import "./App.css";
import { TaskCard } from "./Components/TaskCard";
import { tasks } from "./Types/data-tasks";

function App() {
	return (
		<>
			{tasks.map((task) => (
				<TaskCard task={task} />
			))}
		</>
	);
}

export default App;
