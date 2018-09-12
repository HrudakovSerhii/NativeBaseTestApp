import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
	loginButtonContainer: {
		alignItems: 'center',
	},
	loginButtonText: {
		color: '#FFFFFF'
	}
});

class LoginButton extends Component {
	render() {
		return (
			<View style={styles.loginButtonContainer}>
				<Icon.Button iconStyle={{color: 'white'}} name={this.props.buttonIconType} backgroundColor="#3b5990" onPress={() => {
					this.props.click();
				}}><Text style={styles.loginButtonText}>{this.props.buttonLabel}</Text></Icon.Button>
			</View>
		);
	}
}

LoginButton.propTypes = {
	buttonIconType: PropTypes.string,
	buttonLabel   : PropTypes.string,
	click         : PropTypes.func
};

export default LoginButton;
