import React from 'react';
import {connect} from 'react-redux';
import {addTodo, getAllTodos} from '../actions/todos';

class AddTodo extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllTodos());
    }

    render() {
        let input = null;
        const {dispatch} = this.props;
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return
                        }
                        dispatch(addTodo(input.value));
                        input.value = ''
                    }}
                >
                    <input ref={node => input = node}/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo)