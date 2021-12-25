import { useEffect, useState } from 'react';

import Button from './Button';

interface Props {
	page: number;
	totalRecords: number;
	paginate: (() => void) | ((page: number) => number);
}

interface RenderItemsProps {
	currentPage: number;
	totalRecords: number;
	setCurrentPage: (page: number) => void;
	paginate: (() => void) | ((page: number) => number);
}

const renderItems = ({currentPage, totalRecords, setCurrentPage, paginate}: RenderItemsProps) => {
	let items: JSX.Element[] = [];

	for (let number = 1; number <= totalRecords; number++) {
		items.push(
			<Button
				key={ number }
				variant='primary'
				size='small'
				type='button'
				label={ `${ number }` }
				disabled={ number === currentPage }
				onClick={() => {
					setCurrentPage(number);
					paginate(number);
				}}
			/>
		);
	}

	return <>{ items }</>;
}

const Pagination = ({ page, totalRecords, paginate }: Props): JSX.Element => {
	const [ currentPage, setCurrentPage ] = useState(page);

	useEffect(() => {
		setCurrentPage(page);
	}, [page]);

	return (
		<section className='flex gap-1'>
			<Button
				variant='primary'
				size='small'
				type='button'
				icon='fa-chevron-left'
				disabled={ currentPage === 1 }
				onClick={() => {
					setCurrentPage(currentPage - 1);
					paginate(currentPage - 1);
				}}
			/>

			{ renderItems({ currentPage, totalRecords, setCurrentPage, paginate }) }

			<Button
				variant='primary'
				size='small'
				type='button'
				icon='fa-chevron-right'
				disabled={ currentPage === totalRecords }
				onClick={() => {
					setCurrentPage(currentPage + 1);
					paginate(currentPage + 1);
				}}
			/>
		</section>
	);
}

export default Pagination;
