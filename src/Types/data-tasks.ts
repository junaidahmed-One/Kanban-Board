export type Status = "todo" | "in-progress" | "done";

export type Task = {
	title: string;
	id: string;
	status: Status;
	points?: number;
};

export const statuses: Status[] = ["todo", "in-progress", "done"];

export const tasks: Task[] = [
	{
		title: "Hello World",
		id: "BUS-1",
		status: "todo",
		points: 5,
	},
	{
		title: "Competitive Analysis",
		id: "BUS-2",
		status: "in-progress",
		points: 10,
	},
	{
		title: "Develop component",
		id: "BUS-3",
		status: "done",
		points: 7,
	},
	{
		title: "Test story",
		id: "BUS-4",
		status: "in-progress",
		points: 20,
	},
	{
		title: "Identify potential customers",
		id: "BUS-5",
		status: "todo",
		points: 2,
	},
	{
		title: "Negotiate partnership",
		id: "BUS-6",
		status: "todo",
		points: 4,
	},
	{
		title: "Develop marketing plan",
		id: "BUS-7",
		status: "todo",
		points: 90,
	},
	{
		title: "Evaluate business",
		id: "BUS-8",
		status: "in-progress",
		points: 7,
	},
	{
		title: "Market Research",
		id: "BUS-9",
		status: "done",
		points: 8,
	},
];
