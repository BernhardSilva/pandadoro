import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ handleButton, isActive }) => {
	return (
		<TouchableOpacity>
			<Text style={styles.button} onPress={handleButton}>
				{isActive ? 'Stop' : 'Start'}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginTop: 20,
		backgroundColor: '#333333',
		borderRadius: 15
	}
});

export default Button;
