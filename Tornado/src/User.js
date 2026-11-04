import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count: 1
        }
    }

    render(){
        return(
            <div>
                <h1>Name: Ramya</h1>
                <h2>Location: Bengaluru</h2>
                <h2>Occupation: Developer</h2>
                <h2>Count: {this.state.count}</h2>
            </div>
        )
    }
}

export default User;