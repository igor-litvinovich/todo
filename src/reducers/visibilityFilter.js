import {VisibilityFilters} from '../actions/visibilityFilter'
import visibilityFilterActions from '../actions/visibilityFilterActions';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case visibilityFilterActions.SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state
    }
};
export default visibilityFilter