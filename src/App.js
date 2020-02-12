import React from 'react';

import './App.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Header } from './components';
import Routes from './routes';

function App() {
    return (
        <>
            <Router>
                <>
                    <Header />
                    <Routes />
                    <Footer />
                </>
            </Router>
        </>
    );
}

export default App;
