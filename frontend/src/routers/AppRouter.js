import React, {useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';

import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { login } from '../reducers/actions/auth';

///


export const AppRouter = () => {
    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {
                dispatch( login ( user.uid, user.displayName ) );
                setIsLoggedIn( true );
            }else{
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [dispatch, setChecking, setIsLoggedIn])

    if ( checking ) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <>
        {isLoggedIn ?
            (<CalendarScreen/>)
            :(<AuthRouter/>)}
        </>
    )
}
