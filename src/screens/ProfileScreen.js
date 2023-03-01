import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useEffect} from 'react';
import {Avatar} from 'react-native-paper';
import ButtonWithBackground from '../components/buttonWithBackground';
import SettingsScreen from './settingsScreen';

const baseUrl = 'https://y2ylvp.deta.dev/users/me';

export default function ProfileScreen({navigation}) {
  const [age, setAge] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [gender, setGender] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = await AsyncStorage.getItem('id_token');
    try {
      const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();

      setName(res['name']);
      setEmail(res['email']);
      setAge(res['age']);

      if (res['gender'] === 'm') {
        setGender('Male');
      }
      if (res['gender'] === 'f') {
        setGender('Female');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container1}>
      <ScrollView>
        <View style={styles.topContainer}></View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.circle}>
            <Avatar.Icon
              size={100}
              icon={'account'}
              backgroundColor={'black'}
              style={{
                width: 130,
                height: 130,
                left: 10,
                top: 80,
                borderRadius: 100,
                marginTop: -70,
              }}></Avatar.Icon>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>{name}</Text>
          <Text
            style={{
              bottom: 55,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'grey',
            }}>
            {' '}
            {age}, {gender}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          title="Settings"
          onPress={() => navigation.navigate('settingsScreen')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e91e63',
    height: 150,
    width: '100%',
    padding: 10,
    //backgroundColor:'#FFF1ED',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: 'white',
    bottom: 80,
    elevation: 15,
    shadowOpacity: 80,
  },
  container1: {
    backgroundColor: 'white',
    flex: 1,
  },

  TextInput: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    color: 'black',
  },

  inputView: {
    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 25,
    marginHorizontal: 20,
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: '700',
    alignItems: 'center',
    bottom: 70,
  },
  button: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 55,
    elevation: 15,
    shadowOpacity: 80,
    width: '70%',
  },

  smallText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  textFailed: {
    alignSelf: 'center',
    color: 'red',
    bottom: 33,
    right: 70,
  },
});