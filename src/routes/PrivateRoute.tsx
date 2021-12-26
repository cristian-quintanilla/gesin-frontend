import { Navigate, useLocation } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props): JSX.Element => {
  let location = useLocation();

  const auth: boolean = true;

  if (!auth) {
    return <Navigate to='/' state={{ from: location }} />;
  }

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
