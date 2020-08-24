import React from 'react';

const colors = ['red', 'green', 'blue', 'orange',
    'grey', 'green', 'yellow', 'purple', 'white', 'marine'];

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            color: colors[0],
            isRunning: true,
            millis: new Date().getTime() + 1000
        };

    }

    startStop() {
        this.setState({
            isRunning: !this.state.isRunning
        })
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.isRunning) {
            this.setState({
                date: new Date(this.state.millis),
                color: colors[Math.floor(Math.random() * 10)],
                millis: this.state.millis + 1000
            });
        }
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.color}}>
                <h1>Hello from clock example</h1>
                <h2>Time is {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={() => this.startStop()}>{ this.state.isRunning ? 'Stop' : 'Start' }</button>
            </div>
        );
    }
}

export { Clock }