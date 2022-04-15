import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setcheckingStatus] = useState(true);

  // get user from state through redux
  const { user } = useSelector((state) => state.auth);

  // want to run when user changes
  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setcheckingStatus(false);
  }, [user]);

  return { loggedIn, checkingStatus };
};
