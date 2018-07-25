import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: '#F5FCFF'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
});

class AboutScreen extends React.Component {
	static navigationOptions = {
		title: 'About',
	};
	render() {
		const {navigation} = this.props;
		const params = navigation.getParam('appName', '');

		return (
			<Container style={styles.container}>
				<Content>
					<Text style={styles.instructions}>{params}</Text>
					<Button
						title="Go to Home"
						onPress={() =>
							navigation('Home', {name: 'Home'})
						}
					/>
				</Content>
			</Container>
		);
	}
}

export default AboutScreen;
