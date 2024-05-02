import "./App.css";
import { TaskCard } from "./Components/task-card";

function App() {
	const task = {
		title: "Hello World",
		id: "BUS-1",
		points: 5,
	};
	return (
		<>
			<TaskCard task={task} />
			<TaskCard task={task} />
			<TaskCard task={task} />
			<TaskCard task={task} />
		</>
	);
}

export default App;
