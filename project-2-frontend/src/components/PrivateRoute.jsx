import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  }
  // If user is logged in go to private route, otherwise redirect to login page
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
