import axios from 'axios';
import todosActions from './todosActions';

let nextTodoId = 0;
export const addTodo = title => ({
    type: todosActions.ADD_TODO,
    payload: {
        id: nextTodoId++,
        title: title
    }
});

export const getAllTodos = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return dispatch({
                type: todosActions.GET_TODOS_SUCCESS,
                payload: response.data.slice(0, 10)
            });
        } catch (error) {
            return dispatch({
                type: todosActions.GET_TODOS_ERROR,
                error
            });
        }

    }
};

export const toggleTodo = id => ({
    type: todosActions.TOGGLE_TODO,
    payload: {id}
});