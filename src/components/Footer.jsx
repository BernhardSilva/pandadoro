import { View, StyleSheet, Image } from 'react-native';
import { grassImage } from '../utils/images';

const Footer = () => {
	return (
		<View style={styles.footer}>
			<Image source={grassImage} style={styles.grass} resizeMode='stretch' />
		</View>
	);
};

const styles = StyleSheet.create({
	footer: {
		position: 'relative',
		height: 150
	},
	grass: {
		position: 'absolute',
		top: -200,
		zIndex: -1
	}
});

export default Footer;
