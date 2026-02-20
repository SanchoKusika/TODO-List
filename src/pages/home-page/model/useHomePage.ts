import { useMemo } from "react";

import { useLanguageStore } from "@features/language-switcher";
import { useTasksStore } from "@features/task-management";
import { useTaskSearchStore } from "@features/task-search";

export const useHomePage = () => {
	const language = useLanguageStore((state) => state.language);
	const debouncedQuery = useTaskSearchStore((state) => state.debouncedQuery);
	const tasks = useTasksStore((state) => state.tasks);
	const createTask = useTasksStore((state) => state.createTask);
	const updateTask = useTasksStore((state) => state.updateTask);
	const deleteTask = useTasksStore((state) => state.deleteTask);

	const filteredTasks = useMemo(() => {
		const normalizedQuery = debouncedQuery.trim().toLowerCase();

		return tasks.filter((task) => task.title.toLowerCase().includes(normalizedQuery));
	}, [debouncedQuery, tasks]);

	return {
		language,
		filteredTasks,
		createTask,
		updateTask,
		deleteTask,
	};
};
