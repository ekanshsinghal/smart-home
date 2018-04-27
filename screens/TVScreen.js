import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<Container style={styles.container}>
				<Button onPress={this._power} rounded danger style={{alignSelf:'flex-end', padding:20}}>
					<Ionicons name='ios-power' color='white' size={22}/>
					<Text>Power</Text>
				</Button>
				<View style={{flexDirection: "row", alignSelf:'center'}}>
					
					<Button onPress={this._left} large rounded style={{alignSelf:'center',padding:20, marginLeft:70}}>
						<Ionicons name='ios-arrow-back' color='white' size={22}/>
					</Button>
					<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						<Button onPress={this._up} rounded style={styles.content}>
							<Ionicons name='ios-arrow-up' color='white' size={22}/>
						</Button>
						<Button onPress={this._select} large rounded style={{alignSelf:'center', margin:2,}}>
							<Text style={{fontSize:14}}> Select </Text>
						</Button>
						<Button onPress={this._down} rounded style={styles.content}>
							<Ionicons name='ios-arrow-down' color='white' size={22}/>
						</Button>
					</View>
					<Button onPress={this._right} large rounded style={{alignSelf:'center',padding:20, marginRight:70}}>
						<Ionicons name='ios-arrow-forward' color='white' size={22}/>
					</Button>
					
				</View>

				<View style={{flexDirection: "row", alignSelf:'center'}}>
					<View style={{marginRight:7}}>
						<Button onPress={this._chanup} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='plus' color='white' size={22}/>
						</Button>
						<Button onPress={this._chandown} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='minus' color='white' size={22}/>
						</Button>
					</View>
					<Text style={{alignSelf: 'center', margin:4}}>Chan                  Vol.</Text>
					<View style={{marginLeft:7}}>
						<Button onPress={this._volup} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='plus' color='white' size={22}/>
						</Button>
						<Button onPress={this._voldown} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='minus' color='white' size={22}/>
						</Button>
					</View>
				</View>
				
				<Button onPress={this._hdmi} dark rounded style={{alignSelf:'center'}}>
					<Text>HDMI</Text>
				</Button>
			</Container>
			);
	};

	_power = async () => {
		fetch('http://192.168.225.66:3000/?name=C');
	};
	_volup = async () => {
		fetch('http://192.168.225.66:3000/?name=D');
	};
	_voldown = async () => {
		fetch('http://192.168.225.66:3000/?name=E');
	};
	_chanup = async () => {
		fetch('http://192.168.225.66:3000/?name=F');
	};
	_chandown = async () => {
		fetch('http://192.168.225.66:3000/?name=G');
	};
	_hdmi = async () => {
		fetch('http://192.168.225.66:3000/?name=H');
	};
	_up = async () => {
		fetch('http://192.168.225.66:3000/?name=f');
	};
	_down = async () => {
		fetch('http://192.168.225.66:3000/?name=g');
	};
	_left = async () => {
		fetch('http://192.168.225.66:3000/?name=h');
	};
	_right = async () => {
		fetch('http://192.168.225.66:3000/?name=i');
	};
	_select = async () => {
		fetch('http://192.168.225.66:3000/?name=j');
	};
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#fff',
	},
	numButton:{
		alignSelf: 'center',
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 10,
		marginRight: 10,
		padding: 10,
	},
	content: {
		alignSelf: 'center',
		margin: 6,
		padding: 22,
	},
});