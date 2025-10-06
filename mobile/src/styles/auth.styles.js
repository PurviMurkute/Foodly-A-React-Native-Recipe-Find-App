import { StyleSheet, Dimensions } from 'react-native';
import purpleTheme from './colors';

const { height } = Dimensions.get("window");

const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        height: height * 0.32,
        width: height * 0.35,
        marginBottom: 20
    },
    text: {
        color: purpleTheme.textLight,
        fontSize: 22,
        fontWeight: "bold"
    },
    input: {
    fontSize: 16,
    color: purpleTheme.text,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
    backgroundColor: purpleTheme.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: purpleTheme.border,
  },
  button: {
    marginTop: 30,
    backgroundColor: purpleTheme.primary,
    paddingVertical: 12,
    width: '100%',
    borderRadius: 8
  },
  keyboardView: {
    flex: 1, 
    width: "100%", 
    alignItems: "center"
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
    alignItems: "center"
  },
})

export {
    authStyles
}