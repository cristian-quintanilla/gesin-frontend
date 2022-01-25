//* State
import tokenUser from './config/tokenUser';

import AlertProvider from './context/alert/AlertProvider';
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
			<AlertProvider>
				<CustomersState>
					<ProductsState>
						<OrdersState>
							<Router />
						</OrdersState>
					</ProductsState>
				</CustomersState>
			</AlertProvider>
		</AuthProvider>
	);
}

export default GesinApp;
