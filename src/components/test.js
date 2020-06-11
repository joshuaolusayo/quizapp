import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import Timer from './timer';

const TESTS = 'http://localhost:3004/tests';

const generateQuiz = ({test}) => {
    if (test) {
        return (
            <div className="container">
                {test.map((data) => {
                    return (
                        <div className="test row mx-0 my-5 justify-content-center" key={data.id}>
                            <h2 className="display-5 text-center font-weight-bold mt-5 w-100">{data.name}</h2>
                            <p className="text-muted text-center font-italic w-100"><small>Instructions: Answer all questions.</small></p>
                            
                            <div className="col-12 d-flex justify-content-center d-md-none">
                                <Timer />
                            </div>
                            <div className="col-sm-10 col-md-7 mx-auto mr-md-0">
                                <ol className="test-questions p-3 p-md-0">
                                    {data.que.map((question) => {
                                        return (
                                            <li className="my-3 quest" key={question.id}>
                                                <div>{question.question}</div>
                                                <form>
                                                    <input type="radio" name="option" value="{question.option_A}" />&nbsp;{question.option_A}<br />
                                                    <input type="radio" name="option" value="{question.option_B}" />&nbsp;{question.option_B}<br />
                                                    <input type="radio" name="option" value="{question.option_C}" />&nbsp;{question.option_C}<br />
                                                    <input type="radio" name="option" value="{question.option_D}" />&nbsp;{question.option_D}<br />
                                                    <input type="radio" name="option" value="{question.option_E}" />&nbsp;{question.option_E}<br />
                                                </form>
                                            </li>
                                        )
                                    })}
                                    <div>
                                        <input className="btn btn-lg btn-outline-dark text-center mx-auto my-5 d-block" type="submit" name="submit" value="Submit" />
                                    </div>
                                </ol>
                            </div>
                            <div className="col-md-4 d-none d-md-block ml-0 timerSpace">
                                <Timer />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

class Test extends Component {
    constructor (props) {
        super (props);
        this.state = {
            test: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    }

    componentDidMount () {
        fetch (`${TESTS}?id=${this.props.match.params.id}`, {method: 'GET'})
        .then (response => response.json())
        .then (json => {
            this.setState({
                test: json,
            })
        })

        document.title = `Test ${this.props.match.params.id}`;
    }
    
    componentDidUpdate () {
        fetch (`${TESTS}?id=${this.props.match.params.id}`, {method: 'GET'})
        .then (response => response.json())
        .then (json => {
            this.setState({
                test: json,
            })
        })

        document.title = `Test ${this.props.match.params.id}`;
    }

    render() {
        return (
            <div>
                <Header />
                {generateQuiz(this.state)}
                <Footer />
            </div>
        )
    }
}

export default Test;