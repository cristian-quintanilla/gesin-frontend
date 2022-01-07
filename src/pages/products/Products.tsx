import { Dispatch, SetStateAction, useCallback, useContext, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Alert from '../../components/Alert';

import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import Modal from '../../components/Modal';
import Pagination from '../../components/Pagination';
import TableRecords from '../../components/TableRecords';

import productsContext from '../../context/products/productsContext';
import { ProductType } from '../../types';

const renderProducts = (
	products: ProductType[], setShowModal: Dispatch<SetStateAction<boolean>>, setIdProduct: Dispatch<SetStateAction<string>>
): object => products.map(
	({ _id, name, stock, price }) => (
		<tr key={ _id }>
			<td className='p-2 whitespace-nowrap'>
				{ name }
			</td>
			<td className='p-2 whitespace-nowrap'>
				{ stock }
			</td>
			<td className='p-2 whitespace-nowrap'>
				$ { price }
			</td>
			<td className='flex gap-2 p-2 whitespace-nowrap'>
				<Button
					variant='danger'
					size='small'
					label='Delete'
					type='button'
					icon='fa-trash'
					onClick={() => {
						setShowModal(true);
						setIdProduct(_id as string);
					}}
				/>

				<LinkRouter
					isButton
					linkText='Edit'
					linkTo={`/products/edit/${ _id }`}
					icon='fa-edit'
					size='small'
					variant='primary'
				/>
			</td>
		</tr>
	)
);

const Products = (): JSX.Element => {
	const ProductsContext = useContext(productsContext);
	const { message, products, getProducts, deleteProduct } = ProductsContext;

	const PRODUCTS_PER_PAGE = 2;
	const [ showModal, setShowModal ] = useState(false);
	const [ idProduct, setIdProduct ] = useState('');
	const [ currentPage, setCurrentPage ] = useState(1);

	//* Get products
	useEffect(() => {
		if ( products.length === 0 ) getProducts();
	}, []);

	//* Delete Product
	const onDeleteProduct = useCallback((_id: string): void => {
		toast.success(_id);
		setShowModal(false);
	}, []);

	//* Pagination
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	//* Get current products
	const indexOfLastPost = currentPage * PRODUCTS_PER_PAGE;
	const indexOfFirstPost = indexOfLastPost - PRODUCTS_PER_PAGE;
	const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

	if ( message ) {
		return (
			<main className='w-full md:w-10/12 mx-auto mb-4 p-6 md:px-0'>
				<Alert
					type={ message.type }
					message={ message.msg }
					icon='fa-exclamation-triangle'
				/>
			</main>
		);
	} else if ( products.length === 0 ) {
		return (
			<>
				<Header />

				<main className='w-full md:w-10/12 mx-auto mb-4 px-6 md:px-0'>
					<section className='flex items-center justify-between px-5 py-4'>
						<h2 className='text-lg md:text-2xl text-gray-800'>
							No Products.
						</h2>
						<LinkRouter
							isButton
							linkText='Add Product'
							linkTo='/products/new'
							size='normal'
							variant='primary'
						/>
					</section>
				</main>
			</>
		);
	}

	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto mb-4 px-6 md:px-0'>
				<section className='flex items-center justify-between px-5 py-4'>
					<h2 className='text-lg md:text-2xl text-gray-800'>Products</h2>
					<LinkRouter
						isButton
						linkText='Add Product'
						linkTo='/products/new'
						size='normal'
						variant='primary'
					/>
				</section>

				<section className='mt-4'>
					<TableRecords
						headings={[ 'Name', 'Stock', 'Price', 'Options' ]}
						content={ renderProducts(currentProducts, setShowModal, setIdProduct) }
					/>
				</section>

				<section className='flex justify-end mt-4'>
					<Pagination
						page={ currentPage }
						totalRecords={ Math.ceil(products.length / PRODUCTS_PER_PAGE) }
						paginate={ paginate }
					/>
				</section>
			</main>

			{/* Modal for delete confirmation */}
			{ showModal ? (
				<Modal
					id={ idProduct }
					setId={ setIdProduct }
					onDelete={ onDeleteProduct }
					setShowModal={ setShowModal }
				/>
      ) : null }

			{/* Toast */}
			<Toaster
				position='top-right'
				reverseOrder={false}
			/>
		</>
	);
}

export default Products;
