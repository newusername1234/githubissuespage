import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserCardList from './UserCardList';
// <

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            users: []
        }
    }

    handleChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${this.state.userName}`)
            .then(r => r.json())
            .then(user => this.setState({
                users: [...this.state.users, user]
            }, () => console.log(this.state.users)))
    }

    render() {
        return (
            <div>
                USER SEARCH
                <Link to="/">Back to Issues List</Link>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.userName} />
                    <button type="submit">Submit</button>
                </form>
                <hr />
                {this.state.users.length > 0 && <UserCardList userData={this.state.users} />}
            </div>
        )
    }
}
