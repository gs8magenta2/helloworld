import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div>
                    <h2>Welcome to {this.props.name} </h2>
            </div>
        );
    }
}

export default Message;


