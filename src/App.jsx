import { Route, Routes } from 'react-router-dom'
import './App.css'
import FirstPage from './components/firstPage/FirstPage'
import MainPage from './components/mainPage/MainPage'
import CreateHabits from './components/CreateHabits/CreateHabits'

function App() {
	return (
		<div className='App'>
			
			<Routes>
				<Route path='/' props={true} element={<FirstPage />}/>
				<Route path='/MainPage' props={true} element={<MainPage />}/>
				<Route path='/CreateHabits' props={true} element={<CreateHabits  />}/>
			</Routes>
			
		</div>
	)
}

export default App
