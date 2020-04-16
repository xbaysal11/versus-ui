import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Header } from './components';
import Routes from './routes';

import './App.scss';

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
