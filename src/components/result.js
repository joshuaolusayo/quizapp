import React from 'react';
import Header from './header'
import Footer from './footer';

const displayResult = () => {
    return (
        <div className="row mx-0">
            <div className="mt-5 jumbotron col-sm-10 col-md-8 mx-auto bg-white text-center">
                <p className="lead text-muted">You scored 10/10</p>
            </div>
        </div>
    )
}

const Result = () => {
    document.title = `Test Result`;
    return (
        <div>
            <Header />
            {displayResult()}
            <Footer />
        </div>
    )
}

export default Result;