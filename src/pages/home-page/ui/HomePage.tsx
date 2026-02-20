import "./HomePage.scss";

import { useHomePage } from "@pages/home-page/model/useHomePage";
import { Header } from "@widgets/header";
import { TasksBoard } from "@widgets/tasks-board";

export const HomePage = () => {
	const { language, filteredTasks, createTask, updateTask, deleteTask } = useHomePage();

	return (
		<main className="home-page">
			<div className="home-page__container">
				<Header />

				<section className="home-page__main-content">
					<TasksBoard
						language={language}
						tasks={filteredTasks}
						onCreateTask={createTask}
						onUpdateTask={updateTask}
						onDeleteTask={deleteTask}
					/>
				</section>
			</div>
		</main>
	);
};
