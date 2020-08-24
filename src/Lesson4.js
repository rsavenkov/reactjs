import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const numbers = [1, 2, 3, 4, 5]
export const listItems = numbers.map((number) =>
    <li>{number}</li>
)

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

function ListItem(props) {
    // Правильно! Не нужно определять здесь ключ:
    return <li>{props.value}</li>;
}

function NumberList1(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Правильно! Ключ нужно определять внутри массива:
        <ListItem key={number.toString()} value={number} />

    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

function NumberList2(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                          value={number} />

            )}
        </ul>
    );
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
        {component: 'First...', id: 1},
                	{component: 'Second...', id: 2},
                	{component: 'Third...', id: 3}]
        }
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.data.map((dynamicComponent, i) => <Content
                        key={i} componentData={dynamicComponent}/>)}
                </div>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.componentData.component}
                </div>
                <div>
                    {this.props.componentData.id}
                </div>
            </div>
        );
    }
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Сочинение отправлено: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Сочинение:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Ваш любимый вкус: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Выберите ваш любимый вкус:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Грейпфрут</option>
                        <option value="lime">Лайм</option>
                        <option value="coconut">Кокос</option>
                        <option value="mango">Манго</option>
                    </select>
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert((this.state.isGoing ? 'Пойдут: ' : 'Не пойдут: ') + this.state.numberOfGuests);
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Пойду:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Количество гостей:
                    <input name="numberOfGuests" type="number"
			value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Подтвердить" />
            </form>
        );
    }
}

class NameForm1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }
    handleSubmit(event) {
        alert('Отправленное имя: ' + this.input.current.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

class NameForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }
    handleSubmit(event) {
        alert('Отправленное имя: ' + this.input.current.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input defaultValue="Боб" type="text" ref={this.input} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        let message = '';
        const files = this.fileInput.current.files;
        for (let i = 0; i < files.length; i++) {
            message += files[i].name + ', ';
        }
        alert(`Selected file - ${message}`);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} multiple="true"/>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home...</h1>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About...</h1>
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact...</h1>
            </div>
        )
    }
}

class Menu extends React.Component {
    render() {
        return (
            <div>
                {routing}
            </div>
        )
    }
}

const sections = [
    {link: '/link-1', label: 'label-1'},
    {link: '/link-2', label: 'label-2'},
    {link: '/link-3', label: 'label-3'},
];

const routing = (
    <Router>
        <div>
                <ul>
                    { sections.map((section, ind) => {
                        return (
                            <li key={ind}>
                                <Link to={section.link}>{section.label}</Link>
                            </li>
                        )
                    })}
                </ul>
            {/*<ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>*/}
            <div style={{backgroundColor: 'red'}}>
                <Route path={sections[0].link} component={Home} />
                <Route path={sections[1].link} component={About} />
                <Route path={sections[2].link} component={Contact} />
            </div>
        </div>
    </Router>
)

export { NumberList, NumberList1, NumberList2, App, NameForm, EssayForm, FlavorForm, Reservation, NameForm1, NameForm2, FileInput, Menu }