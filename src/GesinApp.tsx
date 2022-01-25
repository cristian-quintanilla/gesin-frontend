//* State
import tokenUser from './config/tokenUser';

import AlertState from './context/alert/alertState';
import AuthProvider from './context/auth/AuthProvider';
import CustomersState from './context/customers/customersState';
import OrdersState from './context/orders/ordersState';
import ProductsState from './context/products/productsState';

//* Router
import Router from './routes/Router';

const adminToken = sessionStorage.getItem('admin-token');
if (adminToken) tokenUser(adminToken);

function GesinApp() {
	return (
		<AuthProvider>
			<AlertState>
				<CustomersState>
					<ProductsState>
						<OrdersState>
							<Router />
						</OrdersState>
					</ProductsState>
				</CustomersState>
			</AlertState>
		</AuthProvider>
	);
}

export default GesinApp;
