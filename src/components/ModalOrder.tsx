import { Dispatch, SetStateAction } from 'react';

import Button from './Button';

interface Props {
	type: 'cancel' | 'deliver';
	id: string;
	setId: Dispatch<SetStateAction<string>>;
	onAction: (id: string) => void;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}

const ModalOrder = ({ type, id, setId, onAction, setShowModal }: Props): JSX.Element => (
	<>
		<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50'>
			<div className='relative w-auto my-6 mx-auto max-w-sm'>
				<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white'>
					<div className='flex items-start justify-between p-5'>
						<h3 className='text-xl md:text-2xl mr-8'>
							{ type === 'cancel' ? 'Cancel Order' : 'Deliver Order' }
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

					<p className='mx-4 pb-3 text-gray-600 text-base md:text-lg leading-relaxed border-b border-gray-400'>
						{
							type === 'cancel'
							? 'Are you sure you want to cancel this order?'
							: 'Are you sure you want to deliver this order?'
						}
					</p>

					<div className='flex items-center justify-end p-4 gap-2'>
						<Button
							variant='secondary'
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
							variant={ type === 'cancel' ? 'danger' : 'primary' }
							size='normal'
							label={ type === 'cancel' ? 'Cancel Order' : 'Deliver Order' }
							type='button'
							icon={ type === 'cancel' ? 'fa-ban' : 'fa-truck-loading' }
							onClick={ () => onAction(id) }
						/>
					</div>
				</div>
			</div>
		</div>
		<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
	</>
);

export default ModalOrder;
