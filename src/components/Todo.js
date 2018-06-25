import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    render() {
        const {onClick, completed, title} = this.props;
        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {title}
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};

export default Todo;