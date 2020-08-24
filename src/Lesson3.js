import React from 'react';
import ReactDOM from 'react-dom';
import * as l2 from './Lesson2';

class LifecycleMethods extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };

    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }

    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <LifecycleMethods myNumber={this.state.data}></LifecycleMethods>
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Включено' : 'Выключено'}
            </button>
        );
    }
}

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('You do click');
    }

    return (
        <a href="#" onClick={handleClick}>
            Push me
        </a>
    );
}

class Handler1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data...'
        }
    };

    handleClick = () => {
        this.setState({data: 'Data updated...'})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>CLICK</button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

class Handler2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data...'
        }
    };

    handleClick(e) {
        this.setState({data: 'Data updated...'})
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.handleClick(e)}>CLICK</button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data from parent...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
        this.setState({data: 'Data updated from the child component...'})
    }
    render() {
        return (
            <div>
                <Child myDataProp={this.state.data} updateStateProp={this.updateState}></Child>
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.updateStateProp}>CLICK CHILD</button>
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

class App1 extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler() {
        var item = "setState..."
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
    };
    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
}

class App2 extends React.Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };
    forceUpdateHandler() {
        this.forceUpdate();
    };
    render() {
        return (
            <div>
                <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }
}

class App3 extends React.Component {
    constructor() {
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };
    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
        ReactDOM.findDOMNode(myDiv).style.fontSize = '30px';
    }
    render() {
        return (
            <div>
                <button onClick={this.findDomNodeHandler}>FIND DOME NODE</button>
                <div id="myDiv">NODE</div>
            </div>
        );
    }
}

class DefaultDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <div>
                <h2>Not formated date: {this.state.date.toISOString()}.</h2>
                <h2>Formated date: <FormattedDate date={this.state.date}/>.</h2>
            </div>
        )
    }
}

function FormattedDate(props) {
    return <span>{props.date.toLocaleTimeString()}</span>
}

function App4() {
    return (
        <div>
            <l2.Clock />
            <l2.Clock />
            <l2.Clock />
        </div>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function UserGreeting(props) {
    return <h1>Wellcome again!</h1>;
}

function GuestGreeting(props) {
    return <h1>Log in, please.</h1>;
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Войти
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Выйти
        </button>
    );
}

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            {props.text}
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} text={'Warning!'}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Спрятать' : 'Показать'}
                </button>
            </div>
        );
    }
}

export { LifecycleMethods, App, Toggle, ActionLink, Handler1, Handler2, Parent, Child, App1, App2, App3, App4, DefaultDate, FormattedDate, Greeting, LoginControl, Page }