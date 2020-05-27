import { StyleSheet } from "react-native";
import { colors } from '../utils/colors'
const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary
    },
    notesContainer: {
        flex: 3,
        backgroundColor: colors.dark
    }
});

export default styles