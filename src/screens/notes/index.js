
import React, { Component } from 'react';
import {
    SafeAreaView,
    TextInput,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native';

// Importing Styles
import styles from "./styles";
import globalStyles from "../../utils/globalStyles";

import NoteComponent from "../../components/note";

const initState = {
    newNote: '',
    savedNotes: [],
    notesFlag: false,
}

class NotesScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initState
        }
    }

    _textChangeHandler = (text) => {
        this.setState({ newNote: text })
    }

    _clearNoteHandler = () => {
        this.setState({ newNote: '' })
    }

    _saveNoteHandler = () => {
        const notes = this.state.savedNotes
        notes.push({ note: this.state.newNote, done: false })
        this.setState({ savedNotes: notes, newNote: '', notesFlag: !this.state.notesFlag })
    }

    _checkDoneHandler = (index) => {
        const notes = this.state.savedNotes
        if (notes[index].done) {
            notes[index].done = false
            notes.unshift(notes.splice(index, 1)[0])
        }
        else {
            notes[index].done = true
            notes.push(notes.splice(index, 1)[0])
        }

        this.setState({ savedNotes: notes, notesFlag: !this.state.notesFlag })
    }

    _removeNoteHandler = (index) => {
        Alert.alert(
            'Warning!',
            'Are you sure you want to delete this note?',
            [
                {
                    text: 'No',
                    style: 'cancel'

                },
                {
                    text: 'Yes',
                    onPress: () => {
                        const notes = this.state.savedNotes
                        notes.splice(index, 1)
                        this.setState({ savedNotes: notes, notesFlag: !this.state.notesFlag })
                    },
                },
            ],
            { cancelable: false }
        );

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
                            <TextInput
                                style={styles.input}
                                onChangeText={text => this._textChangeHandler(text)}
                                multiline
                                placeholder={'Write your note here'}
                                value={this.state.newNote}
                            />
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity onPress={this._clearNoteHandler}>
                                    <Text style={styles.clearButtonText}>Clear</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={this.state.newNote === '' ? styles.saveButtonDisabled : styles.saveButton} disabled={this.state.newNote === ''}
                                    onPress={() => this._saveNoteHandler()}
                                >
                                    <Text style={styles.saveButtonText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.notesContainer}>
                            {
                                this.state.savedNotes.length === 0 ?
                                    (
                                        <Text style={globalStyles.text}>Notes list is empty.</Text>
                                    ) :
                                    (

                                        <FlatList
                                            extraData={this.state.notesFlag}
                                            data={this.state.savedNotes}
                                            style={{ width: '90%' }}
                                            keyExtractor={(value, index) => index.toString()}
                                            renderItem={value => <NoteComponent note={value.item} doneHandler={() => this._checkDoneHandler(value.index)} removeHandler={() => this._removeNoteHandler(value.index)} />}
                                        />
                                    )
                            }

                        </View>
                    </View>
                </SafeAreaView>
            </>
        );
    }
};


export default NotesScreen;
