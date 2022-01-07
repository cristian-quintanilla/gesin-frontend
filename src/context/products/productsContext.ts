import { createContext } from 'react';

import { ProductType, MessageType } from '../../types';

export interface ProductInterface {
	products: ProductType[];
	message: MessageType | null;
}

type ContextType = {
	products: ProductType[];
	message: MessageType | null;
	getProducts: () => void;
	addProduct: (product: ProductType) => void;
	deleteProduct: (_id: string) => void;
	updateProduct: (product: ProductType) => void;
}

const productsContext = createContext({} as ContextType);
export default productsContext;
