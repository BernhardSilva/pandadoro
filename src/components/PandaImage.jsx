import { StyleSheet, View, Image } from 'react-native';
import { pandaImage } from '../utils/images';

const PandaImage = () => {
	return (
		<View style={{ flex: 0.7 }}>
			<Image source={pandaImage} style={styles.image} />
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 300,
		height: 300,
		marginTop: 50,
		alignSelf: 'center'
	}
});

export default PandaImage;
