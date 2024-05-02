export type Task = {
	title: string;
	id: string;
	points?: number;
};

export const tasks: Task[] = [
	{
		title: "Hello World",
		id: "BUS-1",
		points: 5,
	},
	{
		title: "Competitive Analysis",
		id: "BUS-2",
		points: 10,
	},
	{
		title: "Develop component",
		id: "BUS-3",
		points: 7,
	},
	{
		title: "Test story",
		id: "BUS-4",
		points: 20,
	},
];
