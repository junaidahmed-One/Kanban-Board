import "./App.css";
import { TaskCard } from "./Components/task-card";

function App() {
	const title = "Hello World";
	const id = "BUS-1";
	const points = 5;
	return (
		<>
			<TaskCard title={title} id={id} points={points} />
			<TaskCard title="Competitior Analysis" id="BUS-2" points={10} />
			<TaskCard title={title} id={id} points={points} />
			<TaskCard title={title} id={id} points={points} />
		</>
	);
}

export default App;
