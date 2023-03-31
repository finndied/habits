import React, { useState } from 'react'
import cl from './MainPage.module.css'
import MyDatePicker from './calendar/MyDatePicker'
import TodayHabits from './todayHabits/TodayHabits'
import styles from '../mainPage/todayHabits/TodayHabits.module.css'
import { RiListSettingsLine } from 'react-icons/ri'
import { v4 as uuidv4 } from 'uuid'

const MainPage = () => {
	const data = [
		{
			_id: uuidv4(),
			isDone: false,
			name: '',
			time: '',
			isCompleted: false
		}
	]

	const [habits, setHabits] = useState(data)
	const changeDone = id => {
		const copy = [...habits]
		const current = copy.find(h => h._id === id)
		current.isDone = !current.isDone
		setHabits(copy)
	}
console.log('addHabit:', setHabits)
	return (
		<div className={cl.mainPage}>
			<MyDatePicker />
			<h1 className={cl.title}>
				Let`s make a <br /> habits together
			</h1>
			<div className={cl.wrapperGoals}>
				{/* <DailyGoals/> */}
				<div className={cl.goalsText}>
					Your daily goals <br /> almost done!
				</div>
				{/* <div>10 of 15 completed</div> */}
			</div>
			<div className={styles.HabitsWrapper}>
				<div className={styles.habitsParams}>
					Today Habits
					<button>
						<RiListSettingsLine
							style={{ marginTop: '5px', fontSize: '15px' }}
						/>
					</button>
				</div>
				{habits.map(habit => (
					<TodayHabits
						key={habit._id}
						habit={habit}
						changeDone={changeDone}
						setHabits={setHabits}
					/>
				))}
			</div>
		</div>
	)
}

export default MainPage
