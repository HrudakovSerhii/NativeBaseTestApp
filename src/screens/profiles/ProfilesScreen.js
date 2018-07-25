import React from 'react';
import {Button} from 'native-base';

class ProfilesScreen extends React.Component {
	static navigationOptions = {
		title: 'Profiles',
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

export default ProfilesScreen;
