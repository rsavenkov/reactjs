import React from 'react';
import { lazy, Suspense, Fragment } from 'react';
import * as axios from "axios";

class CountryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null, isLoaded: false, countries: []}
    }
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/").then(res => res.json())
            .then(
                (countries) => {
                    this.setState({isLoaded: true, countries: countries});
                },
                (error) => {
                    this.setState({isLoaded: true, error: error});
                });
    }
    render() {
        return (
            <div>
                <select>
                    {this.state.countries.map((country) =>
                        <option key={country.alpha2Code}>{country.name}</option>
                    )}
                </select>
            </div>
        )
    }
}

class Searcher extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                hits: []
            },
            query: 'react'
        }
        this.fetchData = this.fetchData.bind(this);
    }

    async fetchData(e) {
        let q = e === undefined ? this.state.query : e.target.value;
        const result = await axios('https://hn.algolia.com/api/v1/search?query=' + q);
        this.setState({
            data: result.data,
            query: q
        });

    }
    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div>
                <input value={this.state.query} onChange={this.fetchData} />
                <ul>
                    {this.state.data.hits.map(item => (
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Загрузка...</div>}>
                <LazyComponent delay={3000}/>
                    {/*<span>Lazy component is show!</span>*/}
                {/*</LazyComponent>*/}
            </Suspense>
        </div>
    );
}

const ThemeContext1 = React.createContext('light');

class Context1 extends React.Component {
    render() {
        return (
            <ThemeContext1.Provider value="dark">
                <br/>
                <Toolbar1 />
            </ThemeContext1.Provider>
        );
    }
}

function Toolbar1(props) {
    return (
        <div id="toolBar">
            <ThemedButton1 />
        </div>
    );
}

class ThemedButton1 extends React.Component {
    static contextType = ThemeContext1;
    render() {
        return <button theme={this.context}>Themed button</button>
    }
}

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext(themes.dark);

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <button
                {...props}
                style={{backgroundColor: theme.background}}
            />
        );
    }
}
ThemedButton.contextType = ThemeContext;

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class Context2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }

    render() {
        return (
            <div>
                <br/>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
            </div>
        );
    }
}

class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        );
    }
}

class Columns extends React.Component {
    render() {
        return (
            <React.Fragment>
                <td>Колонка 1</td>
                <td>Колонка 2</td>
            </React.Fragment>
        );
    }
}


class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="/cat.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Перемещайте курсор мыши!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />

                <input
                    type="button"
                    value="Фокус на текстовом поле"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );
    }
}

export { CountryList, Searcher, MyComponent, Context1, Context2, Table, MouseTracker, AutoFocusTextInput }