import React, { useState } from 'react'
import styles from './CreateHabits.module.css'
import MyDatePicker from '../mainPage/calendar/MyDatePicker'
import { v4 as uuidv4 } from 'uuid'

const CreateHabits = ({ setHabits }) => {
	const [name, setName] = useState('')
	const [time, setTime] = useState('')
	const addHabit = () => {
		setHabits(prevHabits => [
			...prevHabits,
			{
				_id: uuidv4(),
				isDone: false,
				name: name,
				time: time,
				isCompleted: false
			}
		])
		setName('')
		setTime('')
	}

	const handleSubmit = e => {
		e.preventDefault()
	}

	console.log('addHabit:', setHabits)

	console.log({ name, time })

	return (
		<>
			<MyDatePicker />
			<div className={styles.modal}>
				<div className={styles.modalContent}>
					<h2>Create your own Habit</h2>
					<form onSubmit={handleSubmit}>
						<input
							placeholder='Name of habit'
							onChange={e => setName(e.target.value)}
							value={name}
						/>
						<input
							placeholder='Time'
							onChange={e => setTime(e.target.value)}
							value={time}
						/>
						<button onClick={addHabit}>Create a Habit</button>
					</form>
					<p>
						After adding a Habit, you can change it or remove it by clicking on
						the settings panel.
					</p>
				</div>
			</div>
		</>
	)
}

export default CreateHabits
