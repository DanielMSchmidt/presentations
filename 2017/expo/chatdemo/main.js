import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }
    render() {
        return (
            <KeyboardAvoidingView keyboardVerticalOffset={100} style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.text}
                    onChangeText={text => {
                        this.setState({ text });
                    }}
                />

                <Button
                    disabled={this.state.text === ''}
                    onPress={() => {
                        console.log('=> ' + this.state.text);
                        this.setState({ text: '' });
                    }}
                    title="Send"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        backgroundColor: '#f2f2f2',
        height: 50,
        width: 300,
        marginBottom: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

Expo.registerRootComponent(App);
