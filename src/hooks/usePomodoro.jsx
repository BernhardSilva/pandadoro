import { useEffect, useState } from 'react';
import { minute, timeValue } from '../utils/time';
import { useSound } from './useSound';

export const usePomodoro = () => {
	const [isWorking, setIsWorking] = useState(false);
	const [time, setTime] = useState(timeValue.pomodoro * 60);
	const [currentTime, setCurrentTime] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const { playButtonSound, playNotificationSound } = useSound();

	const handleButton = () => {
		playButtonSound();
		setIsActive(!isActive);
	};

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setTime(time - 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}

		if (time === 0) {
			setIsActive(false);
			setIsWorking((prev) => !prev);
			isWorking &&
				setTime(
					currentTime === 0
						? timeValue.pomodoro * minute
						: currentTime === 1
						? timeValue.shortBreak * minute
						: timeValue.longBreak * minute
				);
			playNotificationSound();
		}

		return () => clearInterval(interval);
	}, [isActive, time]);

	return {
		currentTime,
		setCurrentTime,
		time,
		setTime,
		isWorking,
		isActive,
		handleButton
	};
};
