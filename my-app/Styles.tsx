import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f4f4',
		paddingHorizontal: 18,
		paddingTop: 78,
	},
	banner: { width: '100%', height: 150, marginBottom: 24 },
	content: { alignItems: 'center', paddingHorizontal: 6 },
	title: {
		color: '#7a117c',
		fontSize: 29,
		fontWeight: '700',
		marginBottom: 10,
	},
	subtitle: {
		color: '#4b5563',
		fontSize: 15,
		lineHeight: 22,
		textAlign: 'center',
	},
	divider: {
		backgroundColor: '#d0d0d0',
		height: 1,
		marginVertical: 22,
		width: '100%',
	},
	primaryButton: {
		alignItems: 'center',
		backgroundColor: '#2099dc',
		justifyContent: 'center',
		minHeight: 46,
		width: '100%',
	},
	primaryButtonText: { color: '#ffffff', fontSize: 13, fontWeight: '700' },
	secondaryButton: {
		alignItems: 'center',
		borderColor: '#2099dc',
		borderWidth: 1,
		justifyContent: 'center',
		marginTop: 12,
		minHeight: 46,
		width: '100%',
	},
	secondaryButtonText: { color: '#1687c6', fontSize: 13, fontWeight: '700' },
});

export default styles;
