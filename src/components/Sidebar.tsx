import { useState } from 'react';

import Button from './Button';
import SidebarLink from './SidebarLink';

const Sidebar = (): JSX.Element => {
	const [ collapseShow, setCollapseShow ] = useState('hidden');

	return (
		<>
			<nav
				className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row
					md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap
					justify-between relative md:w-64 z-10 py-4'
			>
				<div
					className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-2 flex flex-wrap
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
					<h1 className='hidden md:block uppercase font-semibold text-gray-800 text-base md:text-4xl'>
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
						<div className='flex flex-col justify-between flex-1 md:mt-6'>
							<nav className='md:flex-col md:min-w-full flex flex-col list-none mt-2 md:mt-4'>
								<SidebarLink
									route='/customers'
									text='Customers'
									icon='fa-people-arrows'
								/>

								<SidebarLink
									route='/products'
									text='Products'
									icon='fa-boxes'
								/>

								<SidebarLink
									route='/orders'
									text='Orders'
									icon='fa-folder-open'
								/>
							</nav>

							<div className='self-center px-4 -mx-2'>
								<Button
									variant='secondary'
									size='small'
									label='Logout'
									icon='fa-sign-out-alt'
									type='button'
									onClick={ () => console.log('Logout') }
								/>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Sidebar;
