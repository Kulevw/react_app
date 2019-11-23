import React from 'react';
import ReactDOM from 'react-dom';

let messages = ['Привет', 'Как дела?'];
let message = '';
const MessageComponent = (props) => <div>{props.text}</div>;

const MessageBlock = () => <div>
    <input type="text" onInput={(e) => message = e.target.value}/>
    <button onClick={addMessage}>Добавить сообщение</button>
    <MessageField messages={messages}/>
</div>;

const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={message}/>);
};

const App = () => <MessageBlock/>;

const render = () =>
    ReactDOM.render(
        <App/>,
        document.getElementById('root'),
    );

render();

function addMessage(e) {
    e.preventDefault();
    messages.push(message);
    render();
}
