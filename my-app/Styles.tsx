import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#edf4f7',
		paddingHorizontal: 18,
		paddingTop: 78,
	},
	banner: { width: '100%', height: 150, marginBottom: 24, borderRadius: 12 },
	content: {
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderColor: '#d9e5ea',
		borderRadius: 16,
		borderWidth: 1,
		padding: 22,
		shadowColor: '#12313f',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.1,
		shadowRadius: 12,
		elevation: 3,
	},
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
		borderRadius: 10,
		justifyContent: 'center',
		minHeight: 46,
		width: '100%',
	},
	primaryButtonText: { color: '#ffffff', fontSize: 13, fontWeight: '700' },
	buttonPressed: { opacity: 0.75, transform: [{ scale: 0.98 }] },
	secondaryButton: {
		alignItems: 'center',
		borderColor: '#2099dc',
		borderWidth: 1,
		borderRadius: 10,
		justifyContent: 'center',
		marginTop: 12,
		minHeight: 46,
		width: '100%',
	},
	secondaryButtonText: { color: '#1687c6', fontSize: 13, fontWeight: '700' },
});

export default styles;
