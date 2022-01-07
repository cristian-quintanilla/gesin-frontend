import { ReactNode, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

import {
	ProductType,
	GET_PRODUCTS,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	UPDATE_PRODUCT,
	PRODUCTS_ERROR,
} from '../../types';

import clientAxios from '../../config/axios';
import productsContext from './productsContext';
import productsReducer from './productsReducer';

const ProductsState = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();

	const initialState = {
		products: [],
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

	//* Add product
	const addProduct = async (product: ProductType) => {}

	//* Delete product
	const deleteProduct = async (id: string) => {}

	//* Update product
	const updateProduct = async (product: ProductType) => {}

	return (
		<productsContext.Provider
			value={{
				products: state.products,
				message: state.message,
				getProducts,
				addProduct,
				deleteProduct,
				updateProduct,
			}}
		>
			{ children }
		</productsContext.Provider>
	);
}

export default ProductsState;
