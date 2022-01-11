interface Props {
  headings: string[];
  content: object;
}

const TableRecords = ({ headings, content }: Props): JSX.Element => {
  return (
    <div className='bg-white shadow-lg rounded-sm border border-gray-200'>
      <div className='p-3'>
        <div className='overflow-x-auto'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
								{
									headings.map((heading, index) => (
										<th
											key={ `${ heading.replace(/\s/g, '').toLowerCase() }-${ index }` }
											className='p-2 whitespace-nowrap'
										>
											<div className='font-semibold text-left'>{ heading }</div>
										</th>
									))
								}
              </tr>
            </thead>
            <tbody className='text-sm divide-y divide-gray-200'>
              { content }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableRecords;
