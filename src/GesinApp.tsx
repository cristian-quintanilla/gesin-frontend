//* State
import tokenUser from './config/tokenUser';

import AlertProvider from './context/alert/AlertProvider';
import AuthProvider from './context/auth/AuthProvider';
import CustomersState from './context/customers/customersState';
import OrdersState from './context/orders/ordersState';
import ProductsProvider from './context/products/ProductsProvider';

//* Router
import Router from './routes/Router';

const adminToken = sessionStorage.getItem('admin-token');
if (adminToken) tokenUser(adminToken);

function GesinApp() {
	return (
		<AuthProvider>
			<AlertProvider>
				<CustomersState>
					<ProductsProvider>
						<OrdersState>
							<Router />
						</OrdersState>
					</ProductsProvider>
				</CustomersState>
			</AlertProvider>
		</AuthProvider>
	);
}

export default GesinApp;
