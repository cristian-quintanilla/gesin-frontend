import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
	let location = useLocation();
	const { authenticated, userAuthenticated } = useAuth();

	//* Set the last route visited
	localStorage.setItem('last-path', location.pathname);

	useEffect(() => {
		userAuthenticated();
	}, []);

	//* Verify if user is authenticated
	if (!authenticated) return <Navigate to='/' state={{ from: location }} />;

	return (
		<>
			<Sidebar />

			<div className='relative md:ml-64'>
				{ children }
			</div>
		</>
	);
};

export default PrivateRoute;
