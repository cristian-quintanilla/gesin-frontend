import { createContext } from 'react';

import { ProductType, MessageType } from '../../types';

export interface ProductInterface {
	products: ProductType[];
	product: ProductType | null;
	message: MessageType | null;
}

type ContextType = {
	products: ProductType[];
	product: ProductType | null;
	message: MessageType | null;
	getProducts: () => void;
	getProduct: (_id: string) => void;
	addProduct: (product: ProductType) => void;
	deleteProduct: (_id: string) => void;
	updateProduct: (product: ProductType) => void;
	hideAlert: () => void;
}

const productsContext = createContext({} as ContextType);
export default productsContext;
