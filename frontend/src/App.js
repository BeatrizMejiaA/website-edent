import React from 'react';
import {Provider } from 'react-redux';

import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

import { BrowserRouter } from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
        <Provider store = {store}>
            <AppRouter />
        </Provider>
        </BrowserRouter>
        
    )
}
