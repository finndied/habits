import React from 'react'
import styles from './TodayHabits.module.css'
// import styles from '../habitForm/HabitForm.module.css'
import HabitsDone from '../../HabitsDone/HabitsDone'
import MyButton from '../../UI/MyButton'
// import HabitForm from '../habitForm/HabitForm'

import { AiOutlinePlusSquare } from 'react-icons/ai'

const TodayHabits = ({ habit, changeDone, setHabits }) => {
	
	return (
		<>
			<div className={styles.HabitsWrapper}>
				<div className={styles.HabitsWrapper}>
					<div
						className={
							changeDone
								? styles.HabitsContainer
								: !!!!styles.HabitsContainerDone
						}
					>
						<button
							className={styles.ButtonDone}
							onClick={() => changeDone(habit._id)}
						>
							<HabitsDone isDone={habit.isDone} />
						</button>
						<div className={styles.HabitsNameContainer}>
							<div className={styles.HabitsName}>
								{habit.name}
								<div className={styles.HabitsComplete}>{habit.isCompleted}</div>
							</div>
						</div>
						<div className={styles.HabitsTime}>{habit.time}</div>
					</div>
				</div>
				<div className={styles.buttonWrapper}>
					<MyButton setHabits={setHabits} to='/CreateHabits'>
						New Habits
						<AiOutlinePlusSquare
							style={{
								paddingTop: '2px',
								marginLeft: '10px',
								fontSize: '15px'
							}}
						/>
					</MyButton>
				</div>
			</div>
		</>
	)
}

export default TodayHabits
