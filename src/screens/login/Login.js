import React from 'react';
import {View} from 'react-native';
import {Container, Content, Header, Footer, Button, Text, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

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

		switch (type) {
			case 'facebook': view = <FacebookLogin/>; break;
			case 'twitter': view = <TwitterLogin/>; break;
			case 'instagram': view = <InstagramLogin/>; break;
			default: view = this.getDefaultLoginView();
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
				<Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => this.changeView('facebook')}><Text>Login with Facebook</Text></Icon.Button>
				<Icon.Button name="twitter" backgroundColor="#3b5998" onPress={() => this.changeView('twitter')}><Text>Login with Twitter</Text></Icon.Button>
				<Icon.Button name="instagram" backgroundColor="#3b5998" onPress={() => this.changeView('instagram')}><Text>Login with Instagram</Text></Icon.Button>
			</View>
		);
	};

	render() {
		return (
			<View>
				<Text>Here is Login page</Text>
				<View>{ this.state.viewType ? this.getViewFromType(this.state.viewType) : this.getDefaultLoginView()}</View>
			</View>
		);
	}
}

export default Login;
