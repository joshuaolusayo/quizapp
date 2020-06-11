import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from "./header";
import Footer from './footer';

const DATA = 'http://localhost:3004/modules';

const goToTop = () => {
    return setTimeout(() => window.scrollTo(0,0), 200)
}

const displayModule = ({data}) => {
    if (data) {
        return (
            <div className="reading row mx-0">
                {data.map((reading) => {
                    return (
                        <div className="col-sm-10 col-md-8 py-5 px-3 px-md-0 mx-auto" key={reading.id}>
                            <h1 className="text-center font-weight-bold mb-4 display-5 text-uppercase">
                                {reading.name}: {reading.title}
                            </h1>
                            <img className="banner img-thumbnail shadow my-md-2" src={require(`../images/${reading.img}`)} alt=""/>
                            <div className="text-muted text-justify my-5">
                                <p>{reading.text}</p>
                                <p>{reading.text}</p>
                                <p>{reading.text}</p>
                                <p>{reading.text}</p>
                                <p>{reading.text}</p>
                            </div>
                            <div className="links w-100 d-flex flex-wrap justify-content-center align-items-center">
                                <Link className="m-2" to="/modules/1" onClick={goToTop}>
                                    <button className="btn btn-outline-dark">Module 1</button>
                                </Link>
                                <Link className="m-2" to="/modules/2" onClick={goToTop}>
                                    <button className="btn btn-outline-dark">Module 2</button>
                                </Link>
                                <Link className="m-2" to="/modules/3" onClick={goToTop}>
                                    <button className="btn btn-outline-dark">Module 3</button>
                                </Link>
                                <Link className="m-2" to="/modules/4" onClick={goToTop}>
                                    <button className="btn btn-outline-dark">Module 4</button>
                                </Link>
                                <Link className="m-2" to="/modules/5" onClick={goToTop}>
                                    <button className="btn btn-outline-dark">Module 5</button>
                                </Link>
                            </div>
                        </div>
                    )   
                })}
            </div>
        )
    }
}

class Readings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        fetch (`${DATA}?id=${this.props.match.params.id}`, {method: 'GET'})
        .then (response => response.json())
        .then (json => {
            this.setState({
                data: json
            })
        })

        document.title = `Module ${this.props.match.params.id}`;
    }

    componentDidUpdate() {
        fetch (`${DATA}?id=${this.props.match.params.id}`, {method: 'GET'})
        .then (response => response.json())
        .then (json => {
            this.setState({
                data: json
            })
        })

        document.title = `Module ${this.props.match.params.id}`;
    }

    render () {
        return (
            <div>
                <Header />
                {displayModule(this.state)}
                <Footer />
            </div>
        )
    }
}

export default Readings;