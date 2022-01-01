import { Dispatch, SetStateAction } from 'react';

import Button from './Button';

interface Props {
	id: string;
	setId: Dispatch<SetStateAction<string>>;
	onDelete: (id: string) => void;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ id, setId, onDelete, setShowModal }: Props): JSX.Element => (
	<>
		<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50'>
			<div className='relative w-auto my-6 mx-auto max-w-sm'>
				<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white'>
					<div className='flex items-start justify-between p-5'>
						<h3 className='text-lg md:text-3xl font-semibold mr-8'>
							Delete Customer?
						</h3>

						<Button
							variant='secondary'
							size='normal'
							type='button'
							icon='fa-times'
							onClick={() => {
								setShowModal(false);
								setId('');
							}}
						/>
					</div>

					<p className='mx-4 pb-3 text-gray-500 text-base md:text-lg leading-relaxed border-b border-gray-400'>
						This action can't be undone.
					</p>

					<div className='flex items-center justify-end p-4 gap-2'>
						<Button
							variant='danger'
							size='normal'
							label='Close'
							type='button'
							icon='fa-times'
							onClick={() => {
								setShowModal(false);
								setId('');
							}}
						/>

						<Button
							variant='primary'
							size='normal'
							label='Yes, Delete'
							type='button'
							icon='fa-trash'
							onClick={ () => onDelete(id) }
						/>
					</div>
				</div>
			</div>
		</div>
		<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
	</>
);

export default Modal;
