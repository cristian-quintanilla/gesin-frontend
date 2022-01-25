//* Config
import tokenUser from './config/tokenUser';

//* Providers
import AlertProvider from './context/alert/AlertProvider';
import AuthProvider from './context/auth/AuthProvider';
import CustomersProvider from './context/customers/CustomersProvider';
import OrdersProvider from './context/orders/OrdersProvider';
import ProductsProvider from './context/products/ProductsProvider';

//* Router
import Router from './routes/Router';

const adminToken = sessionStorage.getItem('admin-token');
if (adminToken) tokenUser(adminToken);

function GesinApp() {
	return (
		<AuthProvider>
			<AlertProvider>
				<CustomersProvider>
					<ProductsProvider>
						<OrdersProvider>
							<Router />
						</OrdersProvider>
					</ProductsProvider>
				</CustomersProvider>
			</AlertProvider>
		</AuthProvider>
	);
}

export default GesinApp;
