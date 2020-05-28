import { StyleSheet } from "react-native";
import { colors } from '../../screens/utils/colors'
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.lighterGray,
        width: '100%',
        height: 80,
        borderRadius: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        marginBottom:15,
    },
    checkContainer: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    noteContainer: {
        width: '85%',
        paddingHorizontal: 10,
    },
    boxesContainer:{
        width: '15%',  
        paddingRight:10,
    }


});

export default styles