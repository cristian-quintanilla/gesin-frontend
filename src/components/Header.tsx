import { useContext, useEffect, memo } from 'react';

import authContext from '../context/auth/authContext';

const Header = memo((): JSX.Element => {
	const AuthContext = useContext(authContext);
	const { user, userAuthenticated } = AuthContext;

  useEffect(() => {
	  userAuthenticated();
	}, []);

	console.log('Header')

	return (
		<header className='py-4 pl-4 md:pl-8 w-full'>
			<h1 className='text-xl md:text-2xl font-medium md:font-normal text-green-600'>
				Welcome, { user?.name } ({ user?.email })
			</h1>
		</header>
	);
})

export default Header;
