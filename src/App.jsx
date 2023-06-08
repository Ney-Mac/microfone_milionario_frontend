import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<StartPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/forgot-password" element={<ForgotPassScreen />} />
					<Route path="/cliente" element={<DashboardCliente />} />
					<Route path="/artista" element={<DashboardArtista />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
