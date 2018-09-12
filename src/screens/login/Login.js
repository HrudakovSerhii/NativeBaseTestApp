import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, StatusBar, Modal, StyleSheet} from 'react-native';
import {Container, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import {loadFacebookUserData, loadInstagramUserData, loadTwitterUserData} from './redux/actions';

import LoginButton from './components/LoginButton';
import LoginContainer from './components/LoginContainer';

const styles = StyleSheet.create({
	container: {
		flex: 3,
		justifyContent: 'center',
		backgroundColor: 'powderblue'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	loginButtonContainer: {
		color: 'white'
	},
	loginButton: {
		textAlign: 'center',
		fontSize: 22,
		width: 40,
		height: 40
	},
});


class Login extends Component {
	constructor() {
		super();

		this.state = {
			viewType: ''
		};

		this.navigation.bind(this.navigation);
	}

	render() {
		return (
			<Container style={styles.container}>
				<Modal visible={true}>
					<StatusBar hidden={true} />
					<View>
						<Text>Hello</Text>
						<LoginButton buttonIconType="facebook" buttonLabel="Login with Facebook" click={() => this.navigation({screenType: 'Main', navData: {appName: 'Test app'}})}/>
						{/*<LoginButton buttonIconType="instagram" buttonLabel="Login with Instagram" click={this.navigation({screenType: 'Main', navData: {appName: 'Test app'}})}/>*/}
						{/*<LoginButton buttonIconType="twitter" buttonLabel="Login with Twitter" click={this.navigation({screenType: 'Main', navData: {appName: 'Test app'}})}/>*/}
					</View>
				</Modal>
			</Container>
		);
	}

	navigation(navProps) {
		this.props.navigation.navigate(navProps.screenType, navProps.navData);
	}
}

const mapStateToProps = (state) => ({
	loginStatus: state.loginStatus,
	loginList  : state.loginList,
	loginData  : state.loginData
});

const mapDispatchToProps = (dispatch) => ({
	loadFacebookUserData : (userName, userPassword) => dispatch(loadFacebookUserData(userName, userPassword)),
	loadInstagramUserData: (userName, userPassword) => dispatch(loadInstagramUserData(userName, userPassword)),
	loadTwitterUserData  : (userName, userPassword) => dispatch(loadTwitterUserData(userName, userPassword))
});

export default Login; //connect(mapStateToProps, mapDispatchToProps(Login));
