import React from 'react';

class ToDoForm extends React.Component {
    render() {
        return (
            <div className="todo__form">
                <ToDoTextInput
                    className="todo__text-input"
                    placeholder="I need to do..."
                    onSave={this._save}/>
            </div>
        );
    }

    _save(text) {
        this.props.addItem(text);
    }
}

module.exports = ToDoForm;