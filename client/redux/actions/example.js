/*
 * action types
 */

export const SELECT_CARD = 'SELECT_CARD';
export const CHECK_CARD = 'CHECK_CARD';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export const addTodo = text => ({
	type: ADD_TODO,
	text
});

export const toggleTodo = index => ({
	type: TOGGLE_TODO,
	index
});

export const setVisibilityFilter = filter => ({
	type: SET_VISIBILITY_FILTER,
	filter
});
