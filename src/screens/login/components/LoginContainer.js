import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	loginButtonContainer: {
		alignItems: 'center',
	},
});

class LoginContainer extends Component {
	render() {
		return (
			<View style={styles.loginButtonContainer}></View>
		);
	}
}

export default LoginContainer;
