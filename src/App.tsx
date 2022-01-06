//* State
import tokenUser from './config/tokenUser';
import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';
import CustomersState from './context/customers/customersState';

//* Router
import Router from './routes/Router';

const adminToken = sessionStorage.getItem('admin-token');
if (adminToken) tokenUser(adminToken);

function App() {
	return (
		<AuthState>
			<AlertState>
				<CustomersState>
					<Router />
				</CustomersState>
			</AlertState>
		</AuthState>
	);
}

export default App;
