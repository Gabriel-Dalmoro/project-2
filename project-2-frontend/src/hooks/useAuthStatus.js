import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  // Get user through Redux from the backend
  const { user } = useSelector(state => state.auth);

  // Run only when user changes
  useEffect(() => {
    if (user) {
      setLoggedIn(true);
      setCheckingStatus(false);
    } else {
      setLoggedIn(false);
      setCheckingStatus(false);
    }
  }, [user]);

  return { loggedIn, checkingStatus };
};
