import { View, Text } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';
import { Button } from 'react-native-web';

const LoginScreen = () => {
  const {signInWithGoogle} = useAuth();

  return (
    <View>
      <Text>Login to the app</Text>
      <Button title="login" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
