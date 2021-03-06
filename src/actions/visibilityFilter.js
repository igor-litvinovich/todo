import visibilityFilterActions from './visibilityFilterActions';

export const setVisibilityFilter = filter => ({
    type: visibilityFilterActions.SET_VISIBILITY_FILTER,
    payload: {filter}
});


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
