import { useEffect } from 'react';

import { useAuth } from '../hooks/useAuth';

const Header = (): JSX.Element => {
	const { user, userAuthenticated } = useAuth();

  useEffect(() => {
	  if (!user) userAuthenticated();
	}, []);

	return (
		<header className='py-4 pl-4 md:pl-8 w-full'>
			<h1 className='text-xl md:text-2xl font-medium md:font-normal text-green-600'>
				{
					user && <>Welcome, { user?.name } ({ user?.email })</>
				}
			</h1>
		</header>
	);
}

export default Header;
