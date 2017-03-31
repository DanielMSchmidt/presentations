import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.text}
                    onChangeText={text => {
                        this.setState({ text });
                    }}
                />

                <Button
                    onPress={() => {
                        console.log('=> ' + this.state.text);
                        this.setState({ text: '' });
                    }}
                    title="Send"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        backgroundColor: '#f2f2f2',
        height: 50,
        width: 300,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

Expo.registerRootComponent(App);
