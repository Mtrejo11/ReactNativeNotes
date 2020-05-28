import { StyleSheet } from "react-native";
import { colors } from '../../utils/colors'
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
        paddingVertical: 15,
        alignItems: 'center',
    },
    notesContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent:'center', 
        paddingVertical: 15
    },
    input:
    {
        height: 115,
        borderWidth: 1,
        width: '90%',
        padding: 5,
        borderRadius: 10,
        borderColor: colors.gray,
        color: colors.dark
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        alignItems: 'center',
        marginTop: 15
    },
    clearButtonText: {
        color: colors.complementary,
    },
    saveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        width: 85,
        height: 35,
        borderRadius: 8,
    },
    saveButtonDisabled: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray,
        width: 85,
        height: 35,
        borderRadius: 8,
    },
    saveButtonText: {
        color: colors.white
    }
});

export default styles