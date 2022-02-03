import { createContext } from 'react';

import { ProductInterface, ProductsInterface } from '../../interfaces';

type ProductsContextInterface = {
	productsState: ProductsInterface;
	addProduct: (product: ProductInterface) => void;
	cleanProduct: () => void;
	cleanProducts: () => void;
	deleteProduct: (_id: string) => void;
	getProduct: (_id: string) => void;
	getProducts: () => void;
	updateProduct: (product: ProductInterface) => void;
}

const ProductsContext = createContext<ProductsContextInterface>({} as ProductsContextInterface);
export default ProductsContext;
