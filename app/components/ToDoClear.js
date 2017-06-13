import React from 'react';

class ToDoClear extends React.Component{
    render () {
        return (
            <div className="todo__clear"
                 onClick={this.props.removeCompleted}>
                Clear
            </div>
        );
    }
}

module.exports = ToDoClear;