import React, {Component} from 'react';

import {MessengeForm} from "./MessengeForm";
import {MessengesList} from "./MessengesList";


export class Messenger extends Component {

    state = {
        message: {}
    };

    handleMessageSend = (message) => {
        this.setState({
            message: message
        });
    };

    render() {
        const {message} = this.state;
        return (
            <div>
                <MessengeForm onSend={this.handleMessageSend}/>
                <MessengesList message={message}/>
            </div>
        );
    }
}
