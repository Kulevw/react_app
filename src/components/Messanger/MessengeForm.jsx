import React, {Component} from 'react';
import PropType from 'prop-types';

export class MessengeForm extends Component {
    state = {
        author: '',
        text: ''
    };

    static propTypes = {
        onSend: PropType.func,
    };

    handleMessageSend = () => {
        const {onSend} = this.props;

        if (typeof onSend !== 'function') {
            return false;
        }

        onSend(this.state);

        this.setState({
            text: '',
            author: ''
        });
    };

    handleInputChange = ({target}) => {
        let fieldName = target.name;

        this.setState({
            [fieldName]: target.value
        });
    };

    render() {

        const {author, text} = this.state;

        return (
            <div>
                <div>
                    <input placeholder="author" name="author" onChange={this.handleInputChange} type="text" value={author}/>
                </div>
                <div>
                    <textarea placeholder="text" name="text" onChange={this.handleInputChange} value={text}/>
                </div>
                <button onClick={this.handleMessageSend}>Send</button>
            </div>
        );
    }
}