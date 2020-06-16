import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// <
export default class IssueDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,    
            detail: {}
        }
    }
    
    componentDidMount() {
        const { issueNumber } = this.props.match.params;
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`)
            .then(r => r.json())
            .then(data => this.setState({detail: data, loading: false}, () => console.log(this.state)))
    }

    render() {
        if (this.state.loading) {
            return <span>Loading Issue...</span>
        }

        const {title, number, body} = this.state.detail;

        return (
            <div>
                <Link to="/">Back to Issues List</Link>
                <h1>{title} <span style={{color: '#ccc'}}>#{number}</span></h1>
                <p>{body}</p>
            </div>
            )
    }
}
