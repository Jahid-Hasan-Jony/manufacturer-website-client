import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import auth from './firebase.init';
import useAdmin from './Hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)

    if (loading || adminLoading) {
        return <LoadingPage />
    }
    if (!user || !admin) {
        signOut(auth)
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }
    return children;
};

export default RequireAdmin;