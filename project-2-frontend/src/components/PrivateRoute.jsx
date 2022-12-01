import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
  }
  // If user is logged in go to private route, otherwise redirect to login page
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
