import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/routes';
import styles from './index.module.scss';
import PrimaryButton from '../Layout/Button/Primary';
import TextInputComponent from '../Layout/Input/TextInput';

const LoginComponent = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(Routes.FORGOT_PASSWORD as never);
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginFormContainer}>
        <Text style={styles.signInText}>Sign In</Text>
        <Text style={styles.signInDesc}>
          Sign in using your registered account
        </Text>

        <View style={styles.inputContainer}>
          <TextInputComponent placeholder="Enter your email" />
          <TextInputComponent placeholder="Enter your password" />
        </View>

        <PrimaryButton title="Login" onPress={() => {}} />

        <Pressable>
          <Text style={styles.forgot} onPress={handlePress}>
            Forgot password?
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginComponent;
