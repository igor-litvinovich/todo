import todosActions from '../actions/todosActions';

const todos = (state = [], action) => {
    switch (action.type) {
        case todosActions.ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    completed: false
                }
            ];
        case todosActions.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.payload.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        case todosActions.GET_TODOS_SUCCESS: {
            return state.concat(action.payload);
        }
        default:
            return state
    }
};
export default todos;