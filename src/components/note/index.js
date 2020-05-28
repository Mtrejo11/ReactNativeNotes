import React from "react";
import styles from "./styles";
import { View, Text, ScrollView } from "react-native";
import { CheckBox } from 'react-native-elements'
import { colors } from "../../screens/utils/colors";

const NoteComponent = (props) => {
    const { note, done } = props.note
    return (
        <View style={styles.cardContainer}>
            <ScrollView style={styles.noteContainer}>

                <Text>{note}</Text>
            </ScrollView>
            <View style={styles.boxesContainer}>
                <View style={styles.checkContainer}>
                    <CheckBox
                        containerStyle={{ padding: 0, margin: 0 }}
                        center
                        iconRight
                        checkedColor={colors.primary}
                        uncheckedColor={colors.dark}
                        checked={done}
                        onPress={props.doneHandler}

                    />
                </View>
                <View style={styles.checkContainer}>

                    <CheckBox
                        iconType='material'
                        containerStyle={{ padding: 0, margin: 0, }}
                        center
                        iconRight
                        checkedIcon='delete'
                        checkedColor='red'
                        checked={true}
                        onPress={props.removeHandler}
                    />
                </View>
            </View>
        </View>
    )
}

export default NoteComponent