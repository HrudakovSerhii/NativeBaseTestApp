import * as types from './actionTypes';

function loadFacebookUserData() {
	return {
		type: types.FACEBOOK_USER_DATA
	};
}

function loadInstagramUserData() {
	return {
		type: types.INSTAGRAM_USER_DATA
	};
}

function loadTwitterUserData() {
	return {
		type: types.TWITTER_USER_DATA
	};
}

export default {
	loadFacebookUserData,
	loadInstagramUserData,
	loadTwitterUserData
};
