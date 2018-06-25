import axios from 'axios';

let nextTodoId = 0;
export const addTodo = title => ({
    type: 'ADD_TODO',
    payload: {
        id: nextTodoId++,
        title: title
    }
});
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    payload: {filter}
});
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    payload: {id}
});
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


export const getAllTodos = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return dispatch({
                type: 'GET_TODOS_SUCCESS',
                payload: response.data.slice(0, 10)
            });
        } catch (error) {
            return dispatch({
                type: 'GET_TODOS_ERROR',
                error
            });
        }

    }
};