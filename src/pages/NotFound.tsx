import LinkRouter from "../components/LinkRouter";

const NotFound = () => (
	<div className='h-screen w-screen bg-gray-100 flex items-center px-4'>
		<div className='container pl-4 md:pl-12 text-gray-700'>
			<div className='max-w-md'>
				<h1 className='text-5xl font-dark font-bold mb-4'>404</h1>

				<p className='text-xl md:text-2xl font-light leading-normal mb-8'>
					Sorry we couldn't find this page.
				</p>

				<LinkRouter
					isButton
					// icon?: string;
					linkText='Back to Customers Page'
					linkTo='/customers'
					size='normal'
					variant='primary'
				/>
			</div>
		</div>
	</div>
);

export default NotFound;
