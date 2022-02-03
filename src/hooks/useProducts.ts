import { useContext } from 'react';

import ProductsContext from '../context/products/ProductsContext';

export const useProducts = () => {
	const {
		productsState,
		addProduct,
		deleteProduct,
		getProduct,
		getProducts,
		updateProduct,
		cleanProducts,
	} = useContext(ProductsContext);

	const { product, products } = productsState;

	return {
		product,
		products,
		addProduct,
		deleteProduct,
		getProduct,
		getProducts,
		updateProduct,
		cleanProducts,
	}
}
