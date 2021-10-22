import React, { useContext } from 'react';
import  { AuthContext} from '../../context/AuthContext';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute =  ( {children, ...rest} ) => {
    const { user } = useContext(AuthContext);

    return (
        <Route {...rest}>
            {user !== null ?
                children
                :
                <Redirect to='/login'/>
            }
        </Route>
    );
}

export default PrivateRoute;