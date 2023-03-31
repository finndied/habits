import React from 'react'
import styles from './ProgressBar.module.css'

const ProgressBar = ({ completed, total }) => {
	const progress = total > 0 ? Math.floor((completed / total) * 100) : 0
	const strokeDashoffset = 440 - (440 * progress) / 100
	return (
		<>
		<svg className={styles.progressBar} viewBox='0 0 100 100'>
			<circle className={styles.progressBarTrack} cx='50' cy='50' r='45' />
			<circle
				className={styles.progressBarFill}
				cx='50'
				cy='50'
				r='45'
				strokeDasharray='440'
				strokeDashoffset={strokeDashoffset}
			/>
		</svg>
				</>
	)
}

export default ProgressBar
