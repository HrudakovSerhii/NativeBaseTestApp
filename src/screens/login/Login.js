import React from 'react';
import {View} from 'react-native';
import {Container, Content, Header, Footer, Button, Text, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import plugin from 'eslint-plugin-react';

import FacebookLogin from './FacebookLogin';
import InstagramLogin from './InstagramLogin';
import TwitterLogin from './TwitterLogin';

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			viewType: ''
		};
	}

	changeView = (type) => {
		this.setState({viewType: type});
	};

	getViewFromType = (type) => {
		var view;

		if (type === 'facebook') {
			view = <FacebookLogin/>;
		} else if (type === 'twitter') {
			view = <TwitterLogin/>;
		} else if (type === 'instagram') {
			view = <InstagramLogin/>;
		} else {
			view = this.getDefaultLoginView();
		}

		return (
			<View>
				{view}
			</View>
		);
	};

	getDefaultLoginView = () => {
		return (
			<View>
				<Text>Here is Login page</Text>
				<Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => this.changeView('facebook')}><Text>Login with Facebook</Text></Icon.Button>
				<Icon.Button name="twitter" backgroundColor="#3b5998" onPress={() => this.changeView('twitter')}><Text>Login with Twitter</Text></Icon.Button>
				<Icon.Button name="instagram" backgroundColor="#3b5998" onPress={() => this.changeView('instagram')}><Text>Login with Instagram</Text></Icon.Button>
			</View>
		);
	};

	render() {
		return (
			<View>
				<Button title="Back" color="#003355" onPress={() => this.changeView('')}>Back</Button>
				{ this.state.viewType ? this.getViewFromType(this.state.viewType) : this.getDefaultLoginView()}
			</View>
		);
	}
}

export default Login;
