import { createContext } from 'react';

import { ProductInterface, ProductsInterface } from '../../interfaces';

type ProductsContextInterface = {
	productsState: ProductsInterface;
	getProducts: () => void;
	getProduct: (_id: string) => void;
	addProduct: (product: ProductInterface) => void;
	deleteProduct: (_id: string) => void;
	updateProduct: (product: ProductInterface) => void;
	cleanProducts: () => void;
}

const ProductsContext = createContext<ProductsContextInterface>({} as ProductsContextInterface);
export default ProductsContext;
