import React from 'react';
import {Button} from 'native-base';

class InstructionScreen extends React.Component {
	static navigationOptions = {
		title: 'Instruction',
	};
	render() {
		const {navigate} = this.props.navigation;
		return (
			<Button
				title="Go to Jane's profile"
				onPress={() =>
					navigate('Profile', {name: 'Jane'})
				}
			/>
		);
	}
}

export default InstructionScreen;
