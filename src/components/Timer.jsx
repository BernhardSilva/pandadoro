import { View, Text, StyleSheet } from 'react-native';
import { formatTime } from '../helpers/format';

const Timer = ({ time }) => {
	const formattedTime = formatTime(time);
	return (
		<View style={styles.container}>
			<Text style={styles.time}>{formattedTime}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F2F2F2',
		padding: 15,
		borderRadius: 15
	},
	time: {
		fontSize: 80,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#333333'
	}
});

export default Timer;
