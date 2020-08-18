import React from 'react';

const colors = ['red', 'green', 'blue', 'orange', 'grey', 'green', 'yellow', 'purple', 'white', 'marine'];

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            color: colors[0]
        };
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
        this.setState({
            date: new Date(),
            color: colors[Math.floor(Math.random() * 10)]
        });
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.color}}>
                <h1>Hello from clock example</h1>
                <h2>Time is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export { Clock }