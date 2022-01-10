//* State
import tokenUser from './config/tokenUser';

import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';
import CustomersState from './context/customers/customersState';
import OrdersState from './context/orders/ordersState';
import ProductsState from './context/products/productsState';

//* Router
import Router from './routes/Router';

const adminToken = sessionStorage.getItem('admin-token');
if (adminToken) tokenUser(adminToken);

function App() {
	return (
		<AuthState>
			<AlertState>
				<CustomersState>
					<ProductsState>
						<OrdersState>
							<Router />
						</OrdersState>
					</ProductsState>
				</CustomersState>
			</AlertState>
		</AuthState>
	);
}

export default App;
