import { minute } from "../utils/time";

export const formatTime = (time) => {
	return `${Math.floor(time / minute)
		.toString()
		.padStart(2, '0')}:${(time % minute).toString().padStart(2, '0')}`;
};
