import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {
	StartPage,
	LoginPage,
	RegisterPage,
	ForgotPassScreen,
} from './pages/index';
import DashboardCliente from './pages/dashboard_cliente/DashboardCliente';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<StartPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/forgot-password" element={<ForgotPassScreen />} />
					<Route path="/cliente" element={<DashboardCliente />} />
				</Routes>
			</Router>
		</div>
	);
}

/*
<Router>
				<Routes>
					<Route path="/" element={<StartPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/forgot-password" element={<ForgotPassScreen />} />
				</Routes>
			</Router>
*/

export default App;
