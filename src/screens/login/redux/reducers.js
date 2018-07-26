
const OPEN_FACEBOOK_LOGIN = 'OPEN_FACEBOOK_LOGIN';
const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
const FACEBOOK_LOGIN_FAIL = 'FACEBOOK_LOGIN_FAIL';
const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';

const OPEN_INSTAGRAM_LOGIN = 'OPEN_FACEBOOK_LOGIN';
const INSTAGRAM_LOGIN = 'INSTAGRAM_LOGIN';
const INSTAGRAM_LOGIN_FAIL = 'INSTAGRAM_LOGIN_FAIL';
const INSTAGRAM_LOGIN_SUCCESS = 'INSTAGRAM_LOGIN_SUCCESS';

const OPEN_TWITTER_LOGIN = 'OPEN_FACEBOOK_LOGIN';
const TWITTER_LOGIN = 'TWITTER_LOGIN';
const TWITTER_LOGIN_FAIL = 'TWITTER_LOGIN_FAIL';
const TWITTER_LOGIN_SUCCESS = 'TWITTER_LOGIN_SUCCESS';

const OPEN_DEFAULT_LOGIN = 'OPEN_DEFAULT_LOGIN';

function openLoginView(state = {loginViewType: ''}, action) {
	switch (action.type) {
		case OPEN_FACEBOOK_LOGIN: return {...state, loginViewType: 'facebook'};
		case OPEN_INSTAGRAM_LOGIN: return {...state, loginViewType: 'instagram'};
		case OPEN_TWITTER_LOGIN: return {...state, loginViewType: 'twitter'};
		case OPEN_DEFAULT_LOGIN: return {...state, loginViewType: ''}
		default: return {...state};
	}
}

function facebookReducer(state = {loginData: []}, action) {
	switch (action.type) {
		case FACEBOOK_LOGIN: return {...state, loading: true};
		case FACEBOOK_LOGIN_FAIL: return {...state, loading: false, error: true};
		case FACEBOOK_LOGIN_SUCCESS: return {...state, loading: false, loginData: action.payload.data};
		default: return {...state};
	}
}

function instagramReducer(state = {loginData: []}, action) {
	switch (action.type) {
		case INSTAGRAM_LOGIN: return {...state, loading: true};
		case INSTAGRAM_LOGIN_FAIL: return {...state, loading: false, error: true};
		case INSTAGRAM_LOGIN_SUCCESS: return {...state, loading: false, loginData: action.payload.data};
		default: return {...state};
	}
}
function twitterReducer(state = {loginData: []}, action) {
	switch (action.type) {
		case TWITTER_LOGIN: return {...state, loading: true};
		case TWITTER_LOGIN_FAIL: return {...state, loading: false, error: true};
		case TWITTER_LOGIN_SUCCESS: return {...state, loading: false, loginData: action.payload.data};
		default: return {...state};
	}
}

export function listRepos(user) {
	return {
		type: GET_REPOS,
		payload: {
			request: {
				url: `/users/${user}/repos`
			}
		}
	};
}

export default {
	FACEBOOK_LOGIN,
	FACEBOOK_LOGIN_FAIL,
	FACEBOOK_LOGIN_SUCCESS,
	INSTAGRAM_LOGIN,
	INSTAGRAM_LOGIN_FAIL,
	INSTAGRAM_LOGIN_SUCCESS,
	TWITTER_LOGIN,
	TWITTER_LOGIN_FAIL,
	TWITTER_LOGIN_SUCCESS,
	OPEN_FACEBOOK_LOGIN,
	OPEN_INSTAGRAM_LOGIN,
	OPEN_TWITTER_LOGIN,
	OPEN_DEFAULT_LOGIN,
	facebookReducer,
	instagramReducer,
	twitterReducer,
	openLoginView
}
