import React, {Component} from 'react';
import {View, StatusBar, Modal} from 'react-native';
import {Button, Text} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import FacebookLogin from './FacebookLogin';
import InstagramLogin from './InstagramLogin';
import TwitterLogin from './TwitterLogin';

class Login extends Component {
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
				<Modal visible={true}>
					<StatusBar hidden={true} />
					<Button title="Back" color="#003355" onPress={() => this.changeView('')}><Text>Back</Text></Button>
					{view}
				</Modal>
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
				{ this.state.viewType ? this.getViewFromType(this.state.viewType) : this.getDefaultLoginView()}
			</View>
		);
	}
}

export default Login;

// export default connect(state => ({
// 	state: state.viewType
// }),
// 	/* Привязываем действия к компоненту. Теперь доступны события манипуляции счетчиком props.actions.increment() и props.actions.decrement() */
// (dispatch) => ({
// 	actions: bindActionCreators(loginActions, dispatch)
// })
// )(Login);
