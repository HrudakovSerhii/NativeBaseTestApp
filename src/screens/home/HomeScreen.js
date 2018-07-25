import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Header, Footer, Button, Text} from 'native-base';

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

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Home',
	};

	render() {
		const {navigate} = this.props.navigation;
		const params = {
			appName: 'Test App'
		};

		return (
			<Container style={styles.container}>
				<Header/>
				<Content>
					<Button onPress={function() {navigate('About', {appName: 'Test app'})}}>
						<Text>Go To About</Text>
					</Button>
					<Button onPress={function() {navigate('Instruction', params)}}>
						<Text>Go To Instruction</Text>
					</Button>
					<Button onPress={function() {navigate('Profiles', params)}}>
						<Text>Go To Profiles</Text>
					</Button>
				</Content>
				<Footer/>
			</Container>
		);
	}
}

export default HomeScreen;
