import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import './App.css';
import {
	StartPage,
	LoginPage,
	RegisterPage,
	ForgotPassScreen,
} from './pages/index';
import DashboardCliente from './pages/dashboard_cliente/DashboardCliente';
import DashboardArtista from './pages/dashboardArtista/DashboardArtista';

function App() {
	const { userInfo } = useContext(AuthContext);

	return (
		<div className="App">
			<Router>
				<Routes>
					{!!userInfo ? <>
						{(userInfo.roles[0] === "ROLE_USER") ? <>
							<Route path="/" element={<DashboardCliente />} />
						</> : <>
							<Route path="/" element={<DashboardArtista />} />
						</>}
					</> : <>
						<Route path="/" element={<StartPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/forgot-password" element={<ForgotPassScreen />} />
					</>}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
