import React, {Component} from 'react';
import {Messege} from "./Messege";

export class MessengesList extends Component {

    state = {
        messages: [],
        message: {}
    };


    componentDidUpdate = (prevProps, prevState, snapshot) => {
        let message = this.props.message;
        if (this.state.message === message) {
            return false;
        }
        this.setState({
            messages: prevState.messages.concat([this.props.message]),
            message: message
        });
        setTimeout(() => {
            this.handleBotAnswer(message.author);
        }, 250);
    };

    handleBotAnswer = (author) => {
        this.setState({
            messages: this.state.messages.concat([{
                text: `Привет ${author}`,
                author: 'Bot'
            }])
        });
    };


    render() {
        return (
            <ul>
                {this.state.messages.map((message, idx) =>
                    <Messege key={idx} message={message}/>
                )}
            </ul>
        );
    }
}