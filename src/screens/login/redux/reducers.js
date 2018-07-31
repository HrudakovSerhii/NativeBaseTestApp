import * as types from './actionTypes';

function openLoginView(state = {loginViewType: ''}, action) {
	switch (action.type) {
	case types.OPEN_FACEBOOK_LOGIN: return {...state, loginViewType: 'facebook'};
	case types.OPEN_INSTAGRAM_LOGIN: return {...state, loginViewType: 'instagram'};
	case types.OPEN_TWITTER_LOGIN: return {...state, loginViewType: 'twitter'};
	case types.OPEN_DEFAULT_LOGIN: return {...state, loginViewType: ''};
	default: return state;
	}
}

function facebookReducer(state = {loginData: []}, action) {
	switch (action.type) {
	case types.FACEBOOK_LOGIN: return {...state, loading: true};
	case types.FACEBOOK_LOGIN_FAIL: return {...state, loading: false, error: true};
	case types.FACEBOOK_LOGIN_SUCCESS: return {...state, loading: false, loginData: action.payload.data};
	default: return state;
	}
}

function instagramReducer(state = {loginData: []}, action) {
	switch (action.type) {
	case types.INSTAGRAM_LOGIN: return {...state, loading: true};
	case types.INSTAGRAM_LOGIN_FAIL: return {...state, loading: false, error: true};
	case types.INSTAGRAM_LOGIN_SUCCESS: return {...state, loading: false, loginData: action.payload.data};
	default: return state;
	}
}
function twitterReducer(state = {loginData: []}, action) {
	switch (action.type) {
	case types.TWITTER_LOGIN: return {...state, loading: true};
	case types.TWITTER_LOGIN_FAIL: return {...state, loading: false, error: true};
	case types.TWITTER_LOGIN_SUCCESS: return {...state, loading: false, loginData: action.payload.data};
	default: return state;
	}
}

export function listRepos(user) {
	return {
		type   : GET_REPOS,
		payload: {
			request: {
				url: `/users/${user}/repos`
			}
		}
	};
}

export default {
	facebookReducer,
	instagramReducer,
	twitterReducer,
	openLoginView
};
