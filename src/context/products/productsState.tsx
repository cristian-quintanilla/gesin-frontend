import { ReactNode, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

import {
	ProductType,
	GET_PRODUCTS,
	GET_PRODUCT,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	UPDATE_PRODUCT,
	PRODUCTS_ERROR,
	HIDE_ALERT
} from '../../types';

import clientAxios from '../../config/axios';
import productsContext from './productsContext';
import productsReducer from './productsReducer';

const ProductsState = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();

	const initialState = {
		products: [],
		product: null,
		message: null,
	}

	const [ state, dispatch ] = useReducer(productsReducer, initialState);

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
			const message = { msg, type: 'error' };

			dispatch({
				type: PRODUCTS_ERROR,
				payload: message
			});
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
			const message = { msg, type: 'error' };

			dispatch({
				type: PRODUCTS_ERROR,
				payload: message
			});
		}
	}

	//* Add product
	const addProduct = async (product: ProductType) => {
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
			const message = { msg, type: 'error' };

			dispatch({
				type: PRODUCTS_ERROR,
				payload: message
			});
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
			const message = { msg, type: 'error' };

			dispatch({
				type: PRODUCTS_ERROR,
				payload: message
			});
		}
	}

	//* Update product
	const updateProduct = async (product: ProductType) => {
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
			const message = { msg, type: 'error' };

			dispatch({
				type: PRODUCTS_ERROR,
				payload: message
			});
		}
	}

	//* Hide alert
	const hideAlert = () => {
		dispatch({
			type: HIDE_ALERT,
		});
	}

	return (
		<productsContext.Provider
			value={{
				products: state.products,
				product: state.product,
				message: state.message,
				getProducts,
				getProduct,
				addProduct,
				deleteProduct,
				updateProduct,
				hideAlert,
			}}
		>
			{ children }
		</productsContext.Provider>
	);
}

export default ProductsState;
