import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

import authContext from '../context/auth/authContext';

const PrivateRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  let location = useLocation();

  const AuthContext = useContext(authContext);
	const { authenticated, userAuthenticated } = AuthContext;

  useEffect(() => {
	  userAuthenticated();
	}, []);

  //* Verify if user is authenticated
  if (!authenticated) return <Navigate to='/' state={{ from: location }} />;

  return (
    <>
      <Sidebar />

      <div className='relative md:ml-64'>
				<div className='p-8 md:px-10 w-full'>
					{ children }
				</div>
			</div>
    </>
  );
};

export default PrivateRoute;
