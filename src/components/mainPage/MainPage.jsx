import React, { useEffect, useState } from 'react'
import cl from './MainPage.module.css'
import MyDatePicker from './calendar/MyDatePicker'
import TodayHabits from './todayHabits/TodayHabits'
import styles from '../mainPage/todayHabits/TodayHabits.module.css'
import { RiListSettingsLine } from 'react-icons/ri'
import { v4 as uuidv4 } from 'uuid'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { VscEyeClosed } from 'react-icons/vsc'
import MyModal from '../UI/MyModal'
import ProgressBar from './progressBar/ProgressBar'

const MainPage = () => {
	const [modal, setModal] = useState(false)
	const [name, setName] = useState('')
	const [time, setTime] = useState('')
	const [habits, setHabits] = useState([])
	const [isDeleting, setIsDeleting] = useState(false)
	const [completedHabitsCount, setCompletedHabitsCount] = useState(0)
	const completedCount = habits.filter(habit => habit.isDone).length
	const [totalCount, setTotalCount] = useState(habits.length)

	useEffect(() => {
		const storedHabits = JSON.parse(localStorage.getItem('habits'))
		if (storedHabits) {
			setHabits(storedHabits)
		}

		const storedCompletedHabitsCount = JSON.parse(
			localStorage.getItem('completedHabitsCount')
		)
		if (storedCompletedHabitsCount) {
			setCompletedHabitsCount(storedCompletedHabitsCount)
		}

		const storedCompletedCount = JSON.parse(
			localStorage.getItem('completedCount')
		)
		if (storedCompletedCount) {
			setCompletedHabitsCount(storedCompletedCount)
		}

		const storedTotalCount = JSON.parse(localStorage.getItem('totalCount'))
		if (storedTotalCount) {
			setTotalCount(storedTotalCount)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('habits', JSON.stringify(habits))
	}, [habits])

	useEffect(() => {
		localStorage.setItem(
			'completedHabitsCount',
			JSON.stringify(completedHabitsCount)
		)
	}, [completedHabitsCount])

	useEffect(() => {
		localStorage.setItem('completedCount', JSON.stringify(completedCount))
	}, [completedCount])

	useEffect(() => {
		localStorage.setItem('totalCount', JSON.stringify(totalCount))
	}, [totalCount])

	function toggleDeleteMode() {
		setIsDeleting(!isDeleting)
	}

	const addHabit = () => {
		if (name.trim() === '' || time.trim() === '') {
			alert('Should not be empty')
			return
		}
		setHabits(prevHabits => [
			{
				_id: uuidv4(),
				isDone: false,
				name: name,
				time: time
			},
			...prevHabits
		])
		setName('')
		setTime('')
		setModal('')
	}

	const changeDone = id => {
		const copy = [...habits]
		const current = copy.find(h => h._id === id)
		current.isDone = !current.isDone
		setHabits(copy)

		if (current.isDone) {
			setCompletedHabitsCount(prevCount => prevCount + 1)
		} else {
			setCompletedHabitsCount(prevCount => prevCount - 1)
		}
	}
	const removeHabit = id => {
		const copy = [...habits]
		const index = copy.findIndex(h => h._id === id)
		const habit = copy[index]
		copy.splice(index, 1)
		setHabits(copy)
		if (habit.isDone) {
			setCompletedHabitsCount(prevCount => prevCount - 1)
		}
	}

	const renderTodayHabits = () => {
		if (habits.length === 0) {
			return (
				<div className={cl.renderTodayHabits}>
					You have no Habits for today.
					<br /> Click "New Habits" to add one.
				</div>
			)
		}
		return null
	}
	return (
		<>
			<div className={cl.mainPage}>
				<MyDatePicker />
				<div className={cl.yellowCircle}>
					<img src='public/yellow-circle.svg' alt='' />
				</div>
				<div className={cl.blueCircle}>
					<img src='public/blue-circle.svg' alt='' />
				</div>
				<h1 className={cl.title}>
					Let`s make a <br /> habits together
					<div className={cl.smile}>
						<img src='public/smile.svg' alt='' />
					</div>
				</h1>
				<div className={cl.wrapperGoals}>
					<ProgressBar completed={completedCount} total={totalCount} />
					<div className={cl.goalsText}>
						Your daily goals <br /> almost done!{' '}
						<img src='public/fire.svg' />
						<div className={cl.goalsCompleted}>
							{completedHabitsCount} of {habits.length} completed
						</div>
					</div>
				</div>
				<div className={styles.HabitsWrapper}>
					<div className={styles.habitsParams}>
						<div className={cl.light}>
							<img src='public/light.svg' alt='' />
						</div>
						Today Habits
						<button
							className={
								!isDeleting ? styles.ButtonParams : styles.ButtonParamsDelete
							}
							onClick={toggleDeleteMode}
						>
							<RiListSettingsLine
								style={{ marginTop: '5px', fontSize: '15px' }}
							/>
						</button>
					</div>
					{renderTodayHabits()}
					{habits.map(habit => (
						<TodayHabits
							isDeleting={isDeleting}
							key={habit._id}
							habit={habit}
							changeDone={changeDone}
							removeHabit={removeHabit}
						/>
					))}
					<div className={styles.buttonWrapper}>
						<button className={styles.button} onClick={() => setModal(true)}>
							New Habits
							<AiOutlinePlusSquare
								style={{
									paddingTop: '2px',
									marginLeft: '10px',
									fontSize: '15px'
								}}
							/>
						</button>
						<MyModal visible={modal} setVisible={setModal}>
							<div className={styles.MyModalWrapper}>
								<div className={styles.MyModal}>
									<div className={styles.MyModalContent}>
										<VscEyeClosed
											className={styles.MyModalClose}
											onClick={() => setModal(false)}
										/>
										<input
											className={styles.MyModalInput}
											placeholder='Name of habit'
											onChange={e => setName(e.target.value)}
											value={name}
										/>
										<input
											className={styles.MyModalInput}
											placeholder='Time'
											onChange={e => setTime(e.target.value)}
											value={time}
										/>
										<button
											className={styles.MyModalButton}
											onClick={() => addHabit()}
										>
											Create a Habit
										</button>
										<p>
											After adding a Habit, you can remove it by clicking on the
											settings panel.
										</p>
									</div>
								</div>
							</div>
						</MyModal>
					</div>
				</div>
			</div>
		</>
	)
}

export default MainPage
