import { Audio } from 'expo-av';
import { clickSound, notificationSound } from '../utils/sounds';

export const useSound = () => {
	const playButtonSound = async () => {
		const { sound } = await Audio.Sound.createAsync(clickSound);
		await sound.playAsync();
	};
	const playNotificationSound = async () => {
		const { sound } = await Audio.Sound.createAsync(notificationSound);
		await sound.playAsync();
	};
	return {
		playButtonSound,
		playNotificationSound
	};
};
