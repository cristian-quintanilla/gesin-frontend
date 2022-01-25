import { createContext } from 'react';

import { ProductsInterface } from '../../interfaces';
import { ProductType } from '../../types';

type ProductsContextInterface = {
	productsState: ProductsInterface;
	getProducts: () => void;
	getProduct: (_id: string) => void;
	addProduct: (product: ProductType) => void;
	deleteProduct: (_id: string) => void;
	updateProduct: (product: ProductType) => void;
}

const ProductsContext = createContext<ProductsContextInterface>({} as ProductsContextInterface);
export default ProductsContext;
