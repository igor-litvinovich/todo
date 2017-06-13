import React from 'react';

class ToDoTextInput extends React.Component {
    getInitialState() {
        return {
            text: this.props.text ? this.props.text : ''
        };
    }

    render() {
        return (
            <input className={this.props.className}
                   placeholder={this.props.placeholder}
                   value={this.state.text}
                   onChange={this._onChange}
                   onKeyDown={this._onKeyDown}/>
        );
    }

    _save() {
        this.props.onSave(this.state.text);
        this.setState({text: ''});
    }

    _onChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    _onKeyDown(event) {
        if (event.keyCode !== 13) return;

        this._save();
    }
}