/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Button = ({name, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 40,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 16,
      }}
      onPress={onPress}>
      <Text style={{textTransform: 'uppercase'}}>{name}</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 18, margin: 16, textAlign: 'center'}}>
          {`Count : ${counter}`}
        </Text>
        <Button
          name="+"
          onPress={() => dispatch({type: 'counter-incremented'})}
        />
        <Button
          name="-"
          onPress={() => dispatch({type: 'counter-decremented'})}
        />
        <Button
          name="+ takeEvery"
          onPress={() => dispatch({type: 'counter-incremented-every-async'})}
        />
        <Button
          name="+ taketLatetst"
          onPress={() => dispatch({type: 'counter-incremented-latest-async'})}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
