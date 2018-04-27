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
				<Text/>
				<View style={{flexDirection: "row", alignSelf:'center'}}>
					<View>
						<Button onPress={this._volup} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='plus' color='white' size={22}/>
						</Button>
						<Text style={{alignSelf: 'center', margin:4}}>Vol.</Text>
						<Button onPress={this._voldown} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='minus' color='white' size={22}/>
						</Button>
					</View>
					<Button onPress={this._left} large rounded style={{alignSelf:'center', padding:20, marginRight:5}}>
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
					<Button onPress={this._right} large rounded style={{alignSelf:'center', padding:20,marginLeft:5}}>
						<Ionicons name='ios-arrow-forward' color='white' size={22}/>
					</Button>
					<View>
						<Button onPress={this._funcup} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='plus' color='white' size={22}/>
						</Button>
						<Text style={{alignSelf: 'center', margin:4}}>Func.</Text>
						<Button onPress={this._funcdown} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='minus' color='white' size={22}/>
						</Button>
					</View>
				</View>
				
				<Text/>
				<View style={{flexDirection: "row", alignSelf:'center'}}>
					<Button onPress={this._rewind} large dark rounded style={styles.content}>
						<MaterialCommunityIcons name='rewind' color='white' size={22}/>
					</Button>
					<Button onPress={this._stepback} large dark rounded style={styles.content}>
						<MaterialCommunityIcons name='step-backward' color='white' size={22}/>
					</Button>
					<Button onPress={this._stepforward} large dark rounded style={styles.content}>
						<MaterialCommunityIcons name='step-forward' color='white' size={22}/>
					</Button>
					<Button onPress={this._fastforward} large dark rounded style={styles.content}>
						<MaterialCommunityIcons name='fast-forward' color='white' size={22}/>
					</Button>
				</View>

				<Text/>
				<View style={{flexDirection: "row", alignSelf:'center'}}>
					
					<Button onPress={this._pause} large dark rounded style={styles.content}>
						<MaterialCommunityIcons name='pause' color='white' size={22}/>
					</Button>
					<Button onPress={this._play} large success rounded style={styles.content}>
						<MaterialCommunityIcons name='play' color='white' size={22}/>
					</Button>
				</View>
			</Container>
			);
	};

	_power = async () => {
		fetch('http://192.168.225.66:3000/?name=I');
	};
	_volup = async () => {
		fetch('http://192.168.225.66:3000/?name=J');
	};
	_voldown = async () => {
		fetch('http://192.168.225.66:3000/?name=K');
	};
	_funcup = async () => {
		fetch('http://192.168.225.66:3000/?name=L');
	};
	_funcdown = async () => {
		fetch('http://192.168.225.66:3000/?name=M');
	};
	_play = async () => {
		fetch('http://192.168.225.66:3000/?name=N');
	};
	_pause = async () => {
		fetch('http://192.168.225.66:3000/?name=O');
	};
	_stepforward = async () => {
		fetch('http://192.168.225.66:3000/?name=P');
	};
	_stepback = async () => {
		fetch('http://192.168.225.66:3000/?name=Q');
	};
	_fastforward = async () => {
		fetch('http://192.168.225.66:3000/?name=R');
	};
	_rewind = async () => {
		fetch('http://192.168.225.66:3000/?name=S');
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