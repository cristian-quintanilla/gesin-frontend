//* State
import AlertState from './context/alert/alertState';

//* Router
import Router from './routes/Router';

function App() {
	return (
		<AlertState>
			<Router />
		</AlertState>
	);
}

export default App;
