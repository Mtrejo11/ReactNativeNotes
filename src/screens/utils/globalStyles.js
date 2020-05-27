import { StyleSheet } from "react-native";
import { colors } from './colors'
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.white,
        height: '100%',
    },
    text: {
        color: colors.dark,
        fontSize: 20
    },
    headerText: {
        color: colors.dark,
        fontSize: 20,
        fontWeight: '500'
    }
});

export default styles