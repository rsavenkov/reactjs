import React from 'react';

class LazyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({isLoading: false})
        }, this.props.delay)
    }

    render() {
        return this.state.isLoading ? '' : this.props.children;
    }

}
