import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo, getAllTodos} from '../actions/todos';

class AddTodo extends React.Component {
    componentDidMount() {
        const {getAllTodos} = this.props;
        getAllTodos();
    }

    render() {
        let input = null;
        const {addTodo} = this.props;
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return
                        }
                        addTodo(input.value);
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

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: bindActionCreators(addTodo, dispatch),
        getAllTodos: bindActionCreators(getAllTodos, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)