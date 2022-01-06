import React, { Component } from 'react';

class MyNewComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            age_now: this.props.age
        }
    }
    
    birthday = () => {
        this.setState({
            age_now: this.state.age_now + 1
        });
    }

    render(){
        const {firstName,lastName,hairColor} = this.props
        return(
            <div>
                <h1>{firstName},{lastName}</h1>
                <p>Age: {this.state.age_now}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = {this.birthday}>Birthday Button for {firstName},{lastName}</button>
            </div>
        );
    }
}

export default MyNewComponent;