import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

import {
	GET_PRODUCTS,
	GET_PRODUCT,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	UPDATE_PRODUCT,
} from '../../types';

import ProductsContext from './ProductsContext';
import productsReducer from './productsReducer';
import { ProductInterface, ProductsInterface } from '../../interfaces';

import clientAxios from '../../config/axios';

interface ProductsProviderProps {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: ProductsInterface = {
	products: [],
	product: null,
}

const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const navigate = useNavigate();
	const [ productsState, dispatch ] = useReducer(productsReducer, INITIAL_STATE);

	//* Get products
	const getProducts = async () => {
		try {
			const { data } = await clientAxios.get('/api/v1/products');

			dispatch({
				type: GET_PRODUCTS,
				payload: data.products
			});
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error getting products. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Get product
	const getProduct = async (_id: string) => {
		try {
			const { data } = await clientAxios.get(`/api/v1/products/${ _id }`);

			dispatch({
				type: GET_PRODUCT,
				payload: data.product
			});
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error getting product. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Add product
	const addProduct = async (product: ProductInterface) => {
		try {
			const { data } = await clientAxios.post('/api/v1/products/create', product);

			dispatch({
				type: ADD_PRODUCT,
				payload: data.product
			});

			toast.success(data.msg, { duration: 5000 });
			navigate('/products');
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error adding product. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Delete product
	const deleteProduct = async (_id: string) => {
		try {
			const { data } = await clientAxios.delete(`/api/v1/products/delete/${ _id }`);

			dispatch({
				type: DELETE_PRODUCT,
				payload: _id
			});

			toast.success(data.msg, { duration: 5000 });
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error deleting product. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Update product
	const updateProduct = async (product: ProductInterface) => {
		try {
			const { _id, ...productData } = product;
			const { data } = await clientAxios.put(`/api/v1/products/edit/${ _id }`, productData);

			dispatch({
				type: UPDATE_PRODUCT,
				payload: data.product
			});

			toast.success(data.msg, { duration: 5000 });
			navigate('/products');
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error updating product. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	return (
		<ProductsContext.Provider
			value={{
				productsState,
				getProducts,
				getProduct,
				addProduct,
				deleteProduct,
				updateProduct,
			}}
		>
			{ children }
		</ProductsContext.Provider>
	);
}

export default ProductsProvider;
