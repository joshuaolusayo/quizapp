import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const TESTS = 'http://localhost:3004/tests';

const generateBlocks = ({items}) => {
    if (items) {
        return (
            <div className="moduleCard row p-3 p-md-5 mx-0">
                {items.map((item) => {
                    return (
                        <div key={item.id} className="col-sm-6 col-md-4 my-3">
                            <div className="card shadow">
                                <img className="card-img-top" src={require(`../images/${item.img}`)} alt={item.name} />
                                <div className="card-overlay rounded-top d-flex flex-column justify-content-center align-items-center text-warning">
                                    <i className={`fa ${item.fontAwesome} fa-3x`}></i>
                                    <p className="lead text-center">{item.title}</p>
                                    <Link to={`/tests/${item.id}`}>
                                        <button className="btn btn-outline-warning" test={item}>Take test</button>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p className="text-center card-text">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }   
}

class Tests extends Component {
    constructor (props) {
        super(props);

        this.state = {
            items: ''
        }
    }

    componentDidMount() {
        fetch(TESTS, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({
                items: json
            })
        })

        document.title = "Tests";
    }
    

    render() {
        return (
            <div>
                <Header />
                {generateBlocks(this.state)}
                <Footer />
            </div>
        )
    }
}

export default Tests;