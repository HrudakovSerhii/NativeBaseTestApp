import React from 'react';
import LoginBase from './LoginBase';

import {View, Text, Button} from 'react-native';

class FacebookLogin extends LoginBase {
	constructor() {
		super();
	}

	render() {
		return (
			<View>
				<Button title="Back" color="#003355" onPress={() => {this.backToMainLoginView()}}>Back</Button>
				<Text>Login Facebook</Text>
			</View>
		);
	}
}

export default FacebookLogin;
