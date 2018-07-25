/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createStackNavigator} from 'react-navigation';

import HomeScreen from './src/screens/home/HomeScreen.js';
import AboutScreen from './src/screens/about/AboutScreen.js';
import InstructionScreen from './src/screens/instructions/InstructionScreen.js';
import ProfilesScreen from './src/screens/profiles/ProfilesScreen.js';

const App = createStackNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		About: {
			screen: AboutScreen
		},
		Profiles: {
			screen: ProfilesScreen
		},
		Instruction: {
			screen: InstructionScreen
		}
	},
	{
		initialRouteName: 'Home',
	}
);

export default App;
