import React, { Component } from 'react';
import {  Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import getStyle from './style';
export class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const styles = getStyle();
		const { running } = this.props;
		return (
			<TouchableOpacity onPress={ this.props.onPress} style={styles.container}>
				{<Text style={styles.text}> {this.props.children} </Text>}
			</TouchableOpacity>
		);
	}
}
