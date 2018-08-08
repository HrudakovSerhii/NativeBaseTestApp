import {connect} from 'react-redux';

import Login from '../screens/login/Login.js';
import HomeScreen from '../screens/home/HomeScreen.js';
// import AboutScreen from './screens/about/AboutScreen.js';
// import InstructionScreen from './screens/instructions/InstructionScreen.js';
// import ProfilesScreen from './screens/profiles/ProfilesScreen.js';

import {createStackNavigator} from 'react-navigation';
import {reduxifyNavigator, createReactNavigationReduxMiddleware,} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.nav
);

const RootNavigator = createStackNavigator({
	Login: {screen: Login},
	Main : {screen: HomeScreen}
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
	state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {RootNavigator, AppNavigator, middleware};
