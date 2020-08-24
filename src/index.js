import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';
import {Clock} from "./Lesson2";
import * as l3 from "./Lesson3";
import * as l4 from "./Lesson4";
import {routing} from "./Lesson4";

const jsx = 'from jsx';
const element = <h2>Hello world {jsx}!</h2>;

ReactDOM.render(element,  document.getElementById('exp-1'));

function getFullName(user) {
    return user.firstName + ' ' + user.lastName;
};

const user = {
    firstName: 'Иван',
    lastName: 'Иванов'
};

const element1 = (
    <h1>
        My name is {getFullName(user)}!
    </h1>
);

ReactDOM.render(element1, document.getElementById('exp-2'));

const attrs = {
    attr1: 'val1',
    attr2: 'val2'
};

const element2 = <p attr0="val0" attr1={attrs.attr1} attr2={attrs.attr2}>See attributes for this tag</p>;

ReactDOM.render(element2, document.getElementById('exp-3'));

const element3 = (
    <div>
        <h1>Child element h1</h1>
        <h2>Child element h2</h2>
    </div>
);

ReactDOM.render(element3, document.getElementById('exp-3.1'));

const styles = {
    fontSize: '30px',
    color: 'red'
};

const element4 = (
    <div>
        <h1 style={styles}>Font size 30px with red color</h1>
        <h1 style={{fontSize: '20px', color: 'blue'}}>Font size 20px with blue color</h1>
    </div>
);

ReactDOM.render(element4, document.getElementById('exp-4'));

const element5 = (
    <div>
        <h1>Comments</h1>
        {/*
        Multi
        line
        comment
        */}
    </div>
);

ReactDOM.render(element5, document.getElementById('exp-5'));

function tick() {
    const element = (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('exp-6'));
};

setInterval(tick, 1000);

function MyComponent(props) {
    return <h1>Hello world {props.name}</h1>
};
const element6 = <MyComponent name={'from function component!'}/>;
ReactDOM.render(element6, document.getElementById('exp-7'));


class MyComponent1 extends React.Component {
    render() {
        return <h1>Hello world {this.props.name}</h1>
    }
};
const element7 = <MyComponent1 name={'from class component!'}/>;
ReactDOM.render(element7, document.getElementById('exp-8'));

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('exp-8.1'));

class MyProps extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.prop1}</h1>
                <h2>{this.props.prop2}</h2>
            </div>
        );
    }
};

ReactDOM.render(<MyProps prop1="Prop-1" prop2="Prop-2"/>, document.getElementById('exp-9'));

class PropsDefault extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.prop1}</h1>
                <h2>{this.props.prop2}</h2>
            </div>
        );
    }
}

PropsDefault.defaultProps = {
    prop1: "Default prop-1",
    prop2: "Default prop-2"
}

ReactDOM.render(<PropsDefault/>, document.getElementById('exp-10'));

class PropsValid extends React.Component {
    render() {
        return (
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>
            </div>
        );
    }
}

PropsValid.propTypes = {
    propArray: PropTypes.array,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object
}

PropsValid.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: function(e){return e},
    propNumber: 1,
    propString: "String value...",

    propObject: {
        objectName1:"objectValue1",
        objectName2: "objectValue2",
        objectName3: "objectValue3"
    }
}

ReactDOM.render(<PropsValid/>, document.getElementById('exp-11'));

ReactDOM.render(<Clock/>, document.getElementById('exp-12'));

/* lesson 3 */
ReactDOM.render(<l3.LifecycleMethods/>, document.getElementById('exp-13'));
ReactDOM.render(<l3.App/>, document.getElementById('exp-14'));
ReactDOM.render(<l3.Toggle/>, document.getElementById('exp-15'));
ReactDOM.render(<l3.ActionLink/>, document.getElementById('exp-16'));
ReactDOM.render(<l3.Handler1/>, document.getElementById('exp-17'));
ReactDOM.render(<l3.Handler2/>, document.getElementById('exp-18'));
ReactDOM.render(<l3.Parent/>, document.getElementById('exp-19'));
ReactDOM.render(<l3.App1/>, document.getElementById('exp-20'));
ReactDOM.render(<l3.App2/>, document.getElementById('exp-21'));
ReactDOM.render(<l3.App3/>, document.getElementById('exp-22'));
ReactDOM.render(<l3.DefaultDate/>, document.getElementById('exp-23'));
ReactDOM.render(<l3.App4/>, document.getElementById('exp-24'));
ReactDOM.render(<l3.Greeting isLoggedIn={false}/>, document.getElementById('exp-25'));
ReactDOM.render(<l3.LoginControl/>, document.getElementById('exp-26'));
ReactDOM.render(<l3.Page/>, document.getElementById('exp-27'));

/* lesson 4 */
ReactDOM.render(<ul>{l4.listItems}</ul>, document.getElementById('exp-28'));
ReactDOM.render(<l4.NumberList numbers={['a', 'b', 'c', 'd', 'e']} />, document.getElementById('exp-29'));
ReactDOM.render(<l4.NumberList1 numbers={[5, 4, 3, 2, 1]}/>, document.getElementById('exp-30'));
ReactDOM.render(<l4.NumberList2 numbers={['e', 'd', 'c', 'b', 'a']}/>, document.getElementById('exp-31'));
ReactDOM.render(<l4.App />, document.getElementById('exp-32'));
ReactDOM.render(<l4.NameForm />, document.getElementById('exp-33'));
ReactDOM.render(<l4.EssayForm />, document.getElementById('exp-34'));
ReactDOM.render(<l4.FlavorForm />, document.getElementById('exp-35'));
ReactDOM.render(<l4.Reservation />, document.getElementById('exp-36'));
ReactDOM.render(<l4.NameForm1 />, document.getElementById('exp-37'));
ReactDOM.render(<l4.NameForm2 />, document.getElementById('exp-38'));
ReactDOM.render(<l4.FileInput />, document.getElementById('exp-39'));
ReactDOM.render(<l4.Menu/>, document.getElementById('exp-40'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
