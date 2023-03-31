import styles from './TodayHabits.module.css'

import HabitsContainer from '../../HabitsContainer/HabitsContainer'

const TodayHabits = ({ habit, changeDone, setHabits, removeHabit, isDeleting }) => {

	return (
		<>
			<div className={styles.HabitsWrapper}>
				<div className={styles.HabitsWrapper}>
					<HabitsContainer
						habit={habit}
						changeDone={changeDone}
						setHabits={setHabits}
						removeHabit={removeHabit}
						isDeleting={isDeleting}
						
					/>
				</div>
				
			</div>
		</>
	)
}

export default TodayHabits
