
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import Main from './src/views/main';
import store from './src/store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
              <View style={styles.container}>
                  <Main/>
              </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});