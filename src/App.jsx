import { useState } from 'react'
import './App.css'
import {
	Header,
} from './components/index'
import {
	StartPage,
	LoginPage,
	RegisterPage,
} from './pages/index'
import RectBack from './assets/retangulo_background/rectangulo_background.svg'

function App() {

	return (
		<div className="App">
			<LoginPage />
		</div>
	)
}

export default App
