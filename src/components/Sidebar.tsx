import { useState } from 'react';

import Button from './Button';
import SidebarLink from './SidebarLink';

const Sidebar = (): JSX.Element => {
	const [ collapseShow, setCollapseShow ] = useState('hidden');

	return (
		<>
			<nav
				className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row
					md:flex-nowrap md:overflow-hidden shadow-xl bg-green-600 flex flex-wrap
					justify-between relative md:w-64 z-10 py-4'
			>
				<div
					className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap
					items-center justify-between w-full mx-auto'
				>
					{/* Toggler */}
					<div className='ml-4 md:hidden'>
						<Button
							variant='secondary'
							size='small'
							type='button'
							icon='fa-bars'
							onClick={ () => setCollapseShow('bg-white m-2 py-3 px-2') }
						/>
					</div>

					{/* Brand */}
					<h1 className='hidden md:block uppercase text-white text-center text-base md:text-4xl'>
						Gesin
					</h1>

					{/* Collapse */}
					<div
						className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4
						md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto
						overflow-x-hidden h-auto items-center flex-1 ${ collapseShow }`}
					>
						{/* Collapse header */}
						<div className='md:min-w-full md:hidden block pb-2'>
							<div className='flex flex-wrap'>
								<div className='w-6/12 uppercase'>
									Gesin
								</div>
								<div className='w-6/12 flex justify-end'>
									<Button
										variant='secondary'
										size='small'
										type='button'
										icon='fa-times'
										onClick={ () => setCollapseShow('hidden') }
									/>
								</div>
							</div>
						</div>

						{/* MENU */}
						<ul className='md:flex-col md:min-w-full flex flex-col list-none mt-4'>
							<li className='md:bg-yellow-100 flex-row py-2 pl-4 mb-2'>
								<SidebarLink
									route='/customers'
									text='Customers'
									icon='fa-people-arrows'
								/>
							</li>

							<li className='md:bg-yellow-100 flex-row py-2 pl-4 mb-2'>
								<SidebarLink
									route='/products'
									text='Products'
									icon='fa-boxes'
								/>
							</li>

							<li className='md:bg-yellow-100 flex-row py-2 pl-4 mb-2'>
								<SidebarLink
									route='/orders'
									text='Orders'
									icon='fa-folder-open'
								/>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Sidebar;
