import React from 'react'
import styles from './MyButton.module.css'
import { Link } from 'react-router-dom'

const MyButton = ({ to, children, setHabits  }) => {
	return (
		<Link to={{ pathname: to, state: { setHabits } }}>
			<button className={styles.myButton}>{children}</button>
		</Link>
	)
}

export default MyButton
