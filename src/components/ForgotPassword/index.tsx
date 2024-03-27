import {View, Text, Pressable} from 'react-native';
import React from 'react';
import PrimaryButton from '../Layout/Button/Primary';
import TextInputComponent from '../Layout/Input/TextInput';
import styles from '../Login/index.module.scss';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/routes';

const ForgotPasswordComponent = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(Routes.LOGIN as never);
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginFormContainer}>
        <Text style={styles.signInText}>Forgot Password</Text>
        <Text style={styles.signInDesc}>Reset your password</Text>

        <View style={styles.inputContainer}>
          <TextInputComponent placeholder="Enter your email" />
        </View>

        <PrimaryButton title="Reset password" onPress={() => {}} />

        <Pressable onPress={handlePress}>
          <Text style={styles.forgot}>Already have an account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ForgotPasswordComponent;
