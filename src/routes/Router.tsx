import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';

//* Pages
import AddCustomer from '../pages/customers/AddCustomer';
import AddOrder from '../pages/orders/AddOrder';
import AddProduct from '../pages/products/AddProduct';
import Customers from '../pages/customers/Customers';
import LoginPage from '../pages/auth/Login';
import Orders from '../pages/orders/Orders';
import NotFound from '../pages/auth/NotFound';
import Products from '../pages/products/Products';

const Router = (): JSX.Element => {
  return (
    <Routes>
			{/* Public Route */}
			<Route path='/' element={ <LoginPage /> } />

			{/* Private Routes */}
			<Route
				path='/customers'
				element={ <PrivateRoute children={ <Customers /> } /> }
			/>

			<Route
				path='/customers/new'
				element={ <PrivateRoute children={ <AddCustomer /> } /> }
			/>

			<Route
				path='/products'
				element={ <PrivateRoute children={ <Products /> } /> }
			/>

			<Route
				path='/products/new'
				element={ <PrivateRoute children={ <AddProduct /> } /> }
			/>

			<Route
				path='/orders'
				element={ <PrivateRoute children={ <Orders /> } /> }
			/>

			<Route
				path='/orders/new'
				element={ <PrivateRoute children={ <AddOrder /> } /> }
			/>

			{/* No Match */}
			<Route path='*' element={ <NotFound /> } />
		</Routes>
  );
}

export default Router;
