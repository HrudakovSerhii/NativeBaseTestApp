import {connect} from 'react-redux';

import Index from '../screens/login/Login.js';
import Main from '../screens/home/Main.js';
import ProfilesScreen from '../screens/profiles/ProfilesScreen.js';

import {createStackNavigator} from 'react-navigation';
import {reduxifyNavigator, createReactNavigationReduxMiddleware,} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.nav
);

const RootNavigator = createStackNavigator({
	Login   : {screen: Index},
	Main    : {screen: Main},
	Profiles: {screen: ProfilesScreen}
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
	state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {RootNavigator, AppNavigator, middleware};
