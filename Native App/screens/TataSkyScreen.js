import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Content, Button, Text } from 'native-base';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<Content>
					<Button onPress={this._power} rounded danger style={{alignSelf:'flex-end', padding:20}}>
						<Ionicons name='ios-power' color='white' size={22}/>
						<Text>Power</Text>
					</Button>
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
							<Button onPress={this._chanup} large dark rounded style={styles.content}>
								<MaterialCommunityIcons name='plus' color='white' size={22}/>
							</Button>
							<Text style={{alignSelf: 'center', margin:4}}>Chan</Text>
							<Button onPress={this._chandown} large dark rounded style={styles.content}>
								<MaterialCommunityIcons name='minus' color='white' size={22}/>
							</Button>
						</View>
					</View>

					<View style={{flexDirection: "row", alignSelf:'center'}}>
						<Button onPress={this._rewind} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='rewind' color='white' size={22}/>
						</Button>
						<Button onPress={this._pause} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='pause' color='white' size={22}/>
						</Button>
						<Button onPress={this._play} large success rounded style={styles.content}>
							<MaterialCommunityIcons name='play' color='white' size={22}/>
						</Button>
						<Button onPress={this._forward} large dark rounded style={styles.content}>
							<MaterialCommunityIcons name='fast-forward' color='white' size={22}/>
						</Button>
					</View>

					<View style={{flexDirection: "row", alignSelf:'center'}}>
						<Button onPress={this._guide} dark rounded style={{alignSelf:'center', margin:5}}>
							<Text style={{fontSize:14}}>Guide</Text>
						</Button>
						<Button onPress={this._back} dark rounded style={{alignSelf:'center', margin:5}}>
							<Text style={{fontSize:14}}>Back</Text>
						</Button>
						<Button onPress={this._record} danger rounded style={{alignSelf:'center', margin:5,padding:18}}>
							<MaterialCommunityIcons name='record-rec' color='white' size={30}/>
						</Button>
						<Button onPress={this._plan} dark rounded style={{alignSelf:'center', margin:5}}>
							<Text style={{fontSize:14}}>Plan</Text>
						</Button>
					</View>

					<View style={{flexDirection: "row", alignSelf:'center'}}>
						<Button onPress={this._1} large rounded style={styles.numButton}>
							<Text>1</Text>
						</Button>
						<Button onPress={this._2} large rounded style={styles.numButton}>
							<Text>2</Text>
						</Button>
						<Button onPress={this._3} large rounded style={styles.numButton}>
							<Text>3</Text>
						</Button>
					</View>
					<View style={{flexDirection: "row", alignSelf:'center'}}>
						<Button onPress={this._4} large rounded style={styles.numButton}>
							<Text>4</Text>
						</Button>
						<Button onPress={this._5} large rounded style={styles.numButton}>
							<Text>5</Text>
						</Button>
						<Button onPress={this._6} large rounded style={styles.numButton}>
							<Text>6</Text>
						</Button>
					</View>
					<View style={{flexDirection: "row", alignSelf:'center'}}>
						<Button onPress={this._7} large rounded style={styles.numButton}>
							<Text>7</Text>
						</Button>
						<Button onPress={this._8} large rounded style={styles.numButton}>
							<Text>8</Text>
						</Button>
						<Button onPress={this._9} large rounded style={styles.numButton}>
							<Text>9</Text>
						</Button>
					</View>
					<Button onPress={this._0} large rounded style={styles.numButton}>
						<Text>0</Text>
					</Button>
					<Text/><Text/>
				</Content>
			</ScrollView>
			);
	};

	_power = async () => {
		fetch('http://192.168.225.66:3000/?name=a');
	};
	_volup = async () => {
		fetch('http://192.168.225.66:3000/?name=b');
	};
	_voldown = async () => {
		fetch('http://192.168.225.66:3000/?name=c');
	};
	_chanup = async () => {
		fetch('http://192.168.225.66:3000/?name=d');
	};
	_chandown = async () => {
		fetch('http://192.168.225.66:3000/?name=e');
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
	_guide = async () => {
		fetch('http://192.168.225.66:3000/?name=k');
	};
	_back = async () => {
		fetch('http://192.168.225.66:3000/?name=l');
	};
	_record = async () => {
		fetch('http://192.168.225.66:3000/?name=m');
	};
	_plan = async () => {
		fetch('http://192.168.225.66:3000/?name=n');
	};
	_play = async () => {
		fetch('http://192.168.225.66:3000/?name=o');
	};
	_pause = async () => {
		fetch('http://192.168.225.66:3000/?name=p');
	};
	_forward = async () => {
		fetch('http://192.168.225.66:3000/?name=q');
	};
	_rewind = async () => {
		fetch('http://192.168.225.66:3000/?name=r');
	};
	_0 = async () => {
		fetch('http://192.168.225.66:3000/?name=s');
	};
	_1 = async () => {
		fetch('http://192.168.225.66:3000/?name=t');
	};
	_2 = async () => {
		fetch('http://192.168.225.66:3000/?name=u');
	};
	_3 = async () => {
		fetch('http://192.168.225.66:3000/?name=v');
	};
	_4 = async () => {
		fetch('http://192.168.225.66:3000/?name=w');
	};
	_5 = async () => {
		fetch('http://192.168.225.66:3000/?name=x');
	};
	_6 = async () => {
		fetch('http://192.168.225.66:3000/?name=y');
	};
	_7 = async () => {
		fetch('http://192.168.225.66:3000/?name=z');
	};
	_8 = async () => {
		fetch('http://192.168.225.66:3000/?name=A');
	};
	_9 = async () => {
		fetch('http://192.168.225.66:3000/?name=B');
	};
	 
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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