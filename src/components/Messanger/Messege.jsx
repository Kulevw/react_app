import React , {Component} from 'react';

export class Messege extends Component{



    render() {
        return (
            <div>
                <li>
                    {<div>{this.props.message.author} : {this.props.message.text}</div>}
                </li>
            </div>

        );
    }
}