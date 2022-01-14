interface Props {
  headings: string[];
  content: object;
}

const TableRecords = ({ headings, content }: Props): JSX.Element => (
  <div className='bg-white shadow-md shadow-blue-300 rounded-sm border border-gray-200'>
    <div className='p-3'>
      <div className='overflow-x-auto'>
        <table className='table-auto w-full'>
          <thead className='uppercase text-gray-400 bg-gray-50'>
            <tr>
              {
                headings.map((heading, index) => (
                  <th
                    key={ `${ heading.replace(/\s/g, '').toLowerCase() }-${ index }` }
                    className='p-2 whitespace-nowrap'
                  >
                    <div className='text-base font-semibold text-left'>{ heading }</div>
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody className='text-sm divide-y-2 divide-gray-300'>
            { content }
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default TableRecords;
