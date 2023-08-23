import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Footer from './components/Footer';
import Header from './components/Header';
import PandaImage from './components/PandaImage';
import Timer from './components/Timer';
import { usePomodoro } from './hooks/usePomodoro';
import { colors } from './utils/colors';
import Button from './components/Button';

const PomodoroApp = () => {
	const { currentTime, setCurrentTime, time, setTime, isWorking, isActive, handleButton } = usePomodoro();

	return (
		<SafeAreaView style={[styles.container, { backgroundColor: colors[currentTime] }]}>
			<View style={{ flex: 1, paddingHorizontal: 15, paddingTop: Platform.OS === 'android' && 30 }}>
				<Text style={styles.title}>P🐼ndadoro</Text>
				<Header
					currentTime={currentTime}
					setCurrentTime={setCurrentTime}
					setTime={setTime}
					isWorking={isWorking}
					isActive={isActive}
				/>
				<Timer time={time} />
				<Button handleButton={handleButton} isActive={isActive} />
			</View>
			<PandaImage />
			<Footer />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

export default PomodoroApp;
