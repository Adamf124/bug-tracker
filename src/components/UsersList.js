import React, { Component } from 'react'
import axios from 'axios'

const User = props => (
    <tr>
        <td>{props.users.username}</td>
        <td>{props.users.createdAt.substring(0,10)}</td>
    </tr>
)

export default class UsersList extends Component {
    constructor(props){
        super(props);
    this.state = {users: []}
        }
        componentDidMount() {
            axios.get('/users/')
            .then( response => {
                console.log(response.data)
                this.setState({ users: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
        }
        usersList() {
            return this.state.users.map(users => {
                // console.log(users.username)
              return <User 
              users={users} 
              key={users._id}
              />;
            })
          }
    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light fadeblock">
                        <tr>
                            <th>Username</th>
                            <th>Created On</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.usersList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
