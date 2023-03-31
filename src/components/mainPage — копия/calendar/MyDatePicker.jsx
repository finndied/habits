import DatePicker from 'react-datepicker'
import { useState } from 'react'
import '../../../App.css'

import 'react-datepicker/dist/react-datepicker.css'
function MyDatePicker() {
	const [selectedDate, setSelectedDate] = useState(new Date())

	const handleDateChange = date => {
		setSelectedDate(date)
	}

	return (
		<>
			<div>
				<DatePicker
					className='reactDatepicker'
					selected={selectedDate}
					onChange={handleDateChange}
					readOnly={true}
					dateFormat='MMMM,  d'
					disabledKeyboardNavigation={true}
				/>
			</div>
		</>
	)
}

export default MyDatePicker
