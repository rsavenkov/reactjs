import React from 'react';
import { Profiler, useState, useEffect } from 'react';

function Example1() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

function Example2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
    });

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

class Profiling extends React.Component {
    state = {
        count: 0
    };
    logProfile = (id, phase, actualTime, baseTime, startTime, commitTime) => {
        console.log(`${id}'s ${phase} phase:`);
        console.log(`Actual time: ${actualTime}`);
        console.log(`Base time: ${baseTime}`);
        console.log(`Start time: ${startTime}`);
        console.log(`Commit time: ${commitTime}`);
    };
    go = direction => () => this.setState(({ count }) => ({
        count: direction === "up" ? count + 1 : count - 1
    }));
    render() {
        return (
            <Profiler id="app" onRender={this.logProfile}>
                <button onClick={this.go("up")}>☝️</button>
                <button onClick={this.go("down")}>👇</button>
                <div>The count is {this.state.count}</div>
            </Profiler>
        );
    }
}

export { Example1, Example2, Profiling }


