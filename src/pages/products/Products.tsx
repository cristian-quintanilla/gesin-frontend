import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import TableRecords from '../../components/TableRecords';

interface Product {
	_id: string;
	name: string;
	stock: number;
	price: number;
}

const productsArr = [
	{
		_id: '61b2b5d6cc192be8c6af3bf3',
		name: 'Memoria USB 8GB',
		stock: 100,
		price: 99.99,
	},
	{
		_id: '61b2b5d6cc192be8c6af3bf4',
		name: 'Laptop Gamer HP',
		stock: 50,
		price: 899.99,
	},{
		_id: '61b2b5d6cc192be8c6af3bf5',
		name: 'Laptop Gamer MSI',
		stock: 10,
		price: 199.99,
	},
];

const renderProducts = (products: Product[]): object => products.map(
	({ _id, name, stock, price }) => (
		<tr key={ _id }>
			<td className='p-2 whitespace-nowrap'>
				{ name }
			</td>
			<td className='p-2 whitespace-nowrap'>
				{ stock }
			</td>
			<td className='p-2 whitespace-nowrap'>
				${ price }
			</td>
			<td className='flex gap-2 p-2 whitespace-nowrap'>
				<Button
					variant='danger'
					size='small'
					label='Delete'
					type='button'
					icon='fa-trash'
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
	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto'>
				<header className='flex items-center justify-between px-5 py-4'>
					<h2 className='text-xl font-semibold text-gray-800'>Products</h2>
					<LinkRouter
						isButton
						linkText='Add Product'
						linkTo='/products/new'
						size='normal'
						variant='primary'
					/>
				</header>

				<section className='mt-4'>
					<TableRecords
						headings={[ 'Name', 'Stock', 'Price', 'Options' ]}
						content={ renderProducts(productsArr) }
					/>
				</section>
			</main>
		</>
	);
}

export default Products;
