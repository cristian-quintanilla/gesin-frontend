//* State
import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';

//* Router
import Router from './routes/Router';

function App() {
	return (
		<AlertState>
			<AuthState>
				<Router />
			</AuthState>
		</AlertState>
	);
}

export default App;
