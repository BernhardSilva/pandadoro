import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { timeValue } from '../utils/time';

const options = ['Pomodoro', 'Short Break', 'Long Break'];

const Header = ({ currentTime, setCurrentTime, setTime, isActive }) => {
	const handlePress = (index) => {
		const newTime = index === 0 ? timeValue.pomodoro : index === 1 ? timeValue.shortBreak : timeValue.longBreak;
		setCurrentTime(index);
		setTime(newTime * 60);
	};

	return (
		<View style={{ flexDirection: 'row' }}>
			{options.map((item, index) => (
				<TouchableOpacity
					style={[
						styles.itemStyle,
						{ pointerEvents: isActive ? 'none' : 'auto' },
						currentTime !== index && { borderColor: 'transparent', opacity: isActive ? 0.5 : 1 }
					]}
					key={index}
					onPress={() => handlePress(index)}
				>
					<Text style={{ fontWeight: 'bold' }}>{item}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	itemStyle: {
		width: '33%',
		borderWidth: 3,
		padding: 5,
		borderRadius: 10,
		borderColor: 'white',
		marginVertical: 20,
		alignItems: 'center'
	}
});

export default Header;
