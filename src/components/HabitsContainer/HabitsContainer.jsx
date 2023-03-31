import React from 'react'

import styles from '../mainPage/todayHabits/TodayHabits.module.css'

import { MdOutlineDone,MdOutlineDelete } from 'react-icons/md'

const HabitsContainer = ({ habit, changeDone, removeHabit, isDeleting }) => {
	return (
		// Обводка контейнера
		<div
			className={` ${
				habit.isDone ? styles.HabitsContainerDone : styles.HabitsContainer
			}`}
		>
			{/* Кнопка с выполнением привычки */}
			<button
				className={styles.ButtonDone}
				onClick={() => {
					changeDone(habit._id)
				}}
			>
				{/* Обводка кнопки */}
				<div
					className={` ${
						habit.isDone ? styles.HabitsDone : styles.HabitsNotDone
					}`}
				>
					<MdOutlineDone style={{ fontSize: '40px', color: 'white' }} />
				</div>
			</button>
				{/* Название привычки и обводка при выполнении */}
			<div className={styles.HabitsNameContainer}>
         <div
				className={`${
					habit.isDone ? styles.HabitsNameDone : styles.HabitsName
				}`}
			>
					{habit.name}
					{/* Проверка привычки и обводка при выполнении */}
					<div
						className={
							habit.isDone ? styles.HabitsComplete : styles.HabitsNotComplete
						}
					>
						{habit.isDone ? 'Completed!' : 'In progress'}
					</div>
				</div>
			</div>
			{/* Время привычки и обводка при выполнении */}
			<div
				className={`${
					habit.isDone ? styles.HabitsTimeDone : styles.HabitsTime
				}`}
			>
				{habit.time}
			</div>
			{isDeleting && (
			<button
				className={styles.ButtonDelete}
				onClick={() => {
					removeHabit(habit._id)
				}}
			><MdOutlineDelete/></button>
			)}
		</div>
	)
}

export default HabitsContainer
