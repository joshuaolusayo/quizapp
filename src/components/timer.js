import React, {Component} from 'react';

class Timer extends Component {
    constructor (props) {
        super (props);
        this.state = {
            time: 10 * 60,       // the time should be given in seconds. This is 10mins
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    render () {
        const {hours, minutes, seconds} = this.state;
        return (
            <div className="timer row">
                <table>
                    <thead>
                        <tr className="bg-warning">
                            <th>Hours</th>
                            <th>Minutes</th>
                            <th>Seconds</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="text-center">{hours}</th>
                            <th className="text-center">{minutes}</th>
                            <th className="text-center">{seconds}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount () {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time - 1,
                hours: Math.floor(prevState.time / (60*60)) % 60,
                minutes: Math.floor(prevState.time / 60) % 60,
                seconds: (prevState.time) % 60
            }))
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval);
    }
}

export default Timer;