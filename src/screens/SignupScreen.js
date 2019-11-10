import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChange={setEmail}
                autoCorrect={false}
                autoCapitalize={false}
            />
            <Spacer />
            <Input
                label="Password"
                value={password}
                secureTextEntry
                onChange={setPassword}
                autoCorrect={false}
                autoCapitalize={false}
            />
            <Spacer>
                <Button title="Sign Up" onPress={() => navigation.navigate('Signin')} />
            </Spacer>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignupScreen;