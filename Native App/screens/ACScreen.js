import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<Container style={styles.container}>
				<Button iconLeft rounded danger style={{alignSelf:'flex-end', padding:20, marginRight:30}}>
					<Ionicons name='ios-power' color='white' size={20}/>
					<Text>Power</Text>
				</Button>
				<Text/>
				<View style={{flexDirection: "row", alignSelf:'center'}}>
					<View style={{marginRight:7}}>
						<Button large dark rounded style={styles.content}>
							<Ionicons name='ios-arrow-up' color='white' size={20}/>
						</Button>
						
						<Button large dark rounded style={styles.content}>
							<Ionicons name='ios-arrow-down' color='white' size={20}/>
						</Button>
					</View>
					<Text style={{alignSelf: 'center', margin:4}}>Fan               Temp.</Text>
					<View style={{marginLeft:7}}>
						<Button large dark rounded style={styles.content}>
							<Ionicons name='ios-arrow-up' color='white' size={20}/>
						</Button>
						
						<Button large dark rounded style={styles.content}>
							<Ionicons name='ios-arrow-down' color='white' size={20}/>
						</Button>
					</View>
				</View>
				<Text/>
				<View style={{flexDirection: "row", alignSelf:'center'}}>
					<Button rounded success style={{margin:10, padding:5}}>
						<Text>Turbo</Text>
					</Button>
					<Button rounded style={{margin:10, padding:5}}>
						<Text>Mode</Text>
					</Button>
					<Button rounded style={{margin:10, padding:5}}>
						<Text>Swing</Text>
					</Button>
				</View>
			</Container>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#fff',
	},
	content: {
		alignSelf: 'center',
		margin: 6,
		padding: 25,
	},
});