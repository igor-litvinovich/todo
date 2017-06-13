import React from 'react';

class ToDoItem extends React.Component {
    getInitialState() {
        return {
            isEditing: false
        }
    }

    render() {
        const text = this.state.isEditing
            ? (
                <ToDoTextInput className="todo__text todo__text_editing"
                               text={this.props.task.text}
                               onSave={this._save}/>
            )
            : (
                <span className={'todo__text' + (this.props.task.completed ? ' todo__text_completed' : '')}
                      onDoubleClick={this.__edit}>{this.props.task.text}</span>
            );

        return (
            <div className="todo__item">
                <input type="checkbox" className="todo__checkbox"
                       checked={this.props.task.completed}
                       onChange={this._toggleItem}/>
                <span className="todo__destroy"
                      onClick={this._removeItem}>-</span>
                {' '}
                {text}

            </div>
        );
    }

    __edit() {
        this.setState({isEditing: true});
    }

    _save(text) {
        this.setState({isEditing: false});
        this.props.updateItem(this.props.task.id, text);
    }

    _toggleItem() {
        this.props.toggleItem(this.props.task.id);
    }

    _removeItem() {
        this.props.removeItem(this.props.task.id);
    }
}