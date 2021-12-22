interface Props {
	headings: string[];
	content: object;
}

const TableRecords = ({ headings, content }: Props): JSX.Element => {
	return (
		<table className='table-auto'>
			<thead>
				<tr>
					{
						headings.map((heading, index) => (
							<th
								key={ `${ heading.replace(/\s/g, '').toLowerCase() }-${ index }` }
								className='border-2 border-gray-400 bg-gray-200 px-6 py-2 text-center text-xs sm:text-base font-medium text-gray-500 uppercase tracking-wider'
							>
								{ heading }
							</th>
						))
					}
				</tr>
			</thead>
			<tbody>
				{ content }
			</tbody>
		</table>
	);
}

export default TableRecords;
