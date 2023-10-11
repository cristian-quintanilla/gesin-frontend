import { useEffect, memo } from 'react';

import { useAuth } from '../hooks/useAuth';

const Header = memo((): JSX.Element => {
	const { user, userAuthenticated } = useAuth();

  useEffect(() => {
	  if (!user) userAuthenticated();
	}, []);

	return (
		<header className='py-4 pl-4 md:pl-8 w-full'>
			<h1 className='text-xl md:text-2xl font-semibold text-green-600'>
				{
					user && <>Welcome, { user?.name } ({ user?.email })</>
				}
			</h1>
		</header>
	);
})

Header.displayName = 'Header';
export default Header;
