import { Dispatch, SetStateAction, useCallback, useContext, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import Modal from '../../components/Modal';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import TableRecords from '../../components/TableRecords';

import productsContext from '../../context/products/productsContext';
import { ProductType } from '../../types';

const renderProducts = (
	products: ProductType[],
	setShowModal: Dispatch<SetStateAction<boolean>>,
	setIdProduct: Dispatch<SetStateAction<string>>
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
	const { products, deleteProduct, getProducts } = useContext(productsContext);

	const PRODUCTS_PER_PAGE = 2;
	const [ currentPage, setCurrentPage ] = useState<number>(1);
	const [ idProduct, setIdProduct ] = useState<string>('');
	const [ isLoading, setIsLoading ] = useState<boolean>(true);
	const [ showModal, setShowModal ] = useState<boolean>(false);

	//* Get products
	useEffect(() => {
		getProducts();
		setIsLoading(false);
	}, []);

	//* Delete Product
	const onDeleteProduct = useCallback((_id: string): void => {
		deleteProduct(_id);
		setShowModal(false);
		setCurrentPage(1);
	}, []);

	//* Pagination
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	//* Get current products
	const indexOfLastPost = currentPage * PRODUCTS_PER_PAGE;
	const indexOfFirstPost = indexOfLastPost - PRODUCTS_PER_PAGE;
	const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

	//* Loading
	if (isLoading) return <Spinner />;

	return (
		<>
			<Header />

			<main className='animate__animated animate__fadeIn w-full md:w-10/12 mx-auto mb-4 px-6 md:px-0'>
				<section className='flex items-center justify-between px-5 py-4'>
					{
						products.length === 0 ? (
							<>
								<h2 className='text-lg md:text-2xl text-gray-800'>No Products</h2>
								<LinkRouter
									isButton
									linkText='Add Product'
									linkTo='/products/new'
									size='normal'
									variant='primary'
								/>
							</>
						) : (
							<>
								<h2 className='text-lg md:text-2xl text-gray-800'>Products</h2>
								<LinkRouter
									isButton
									linkText='Add Product'
									linkTo='/products/new'
									size='normal'
									variant='primary'
								/>
							</>
						)
					}
				</section>

				{
					products.length > 0 && (
						<>
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
						</>
					)
				}
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
