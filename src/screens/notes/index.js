
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { Input } from 'react-native-elements';

// Importing Styles
import styles from "./styles";
import globalStyles from "../utils/globalStyles";
const initState = {}

class NotesScreen extends Component {
    constructor(props) {
        super(props)
        state = {
            ...initState
        }
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <View
                        contentInsetAdjustmentBehavior="automatic"
                        style={globalStyles.mainContainer}>

                        <View style={styles.header}>
                            <Text style={globalStyles.headerText}>My Notes</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                placeholder="Comment"
                                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                                style={styles}
                                onChangeText={value => this.setState({ comment: value })}
                            />

                        </View>
                        <View style={styles.notesContainer}>
                            <Text style={globalStyles.text}>My Notes</Text>

                        </View>


                    </View>
                </SafeAreaView>
            </>
        );
    }
};


export default NotesScreen;
