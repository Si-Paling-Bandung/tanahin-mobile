import {VStack, Text, HStack, Image, View, Icon} from 'native-base';
import React, {useEffect, useState} from 'react';
import {BackgroundSplash, HeroSplash, Logo, Tanahin} from '../../assets/dummy';
import {ImageBackground} from 'react-native';
import {getData} from '../../utils/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  const [user] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // AsyncStorage.clear()
      // navigation.replace('Landing')
      getData('users')
        .then(res => {
          // if(!res){
          navigation.replace('Landing');
          // }
          // navigation.replace('MainApp')
        })
        .catch(err => {
          console.log(err);
        });
    }, 3500);
  }, [navigation]);

  return (
    <View>
      <ImageBackground
        source={require('../../assets/dummy/background_splash.png')}
        resizeMode={'cover'}>
        <VStack px={'25px'} pt={'40px'} h={'full'} w={'full'} mt={'auto'}>
          {/* <Image alt="bg"/> */}
          <Tanahin />
          <Text fontWeight={'semibold'} fontSize={26} color={'#4FAD39'}>
            Your solution of Land
          </Text>
          <Text fontWeight={'semibold'} fontSize={26} color={'#4FAD39'}>
            Investment
          </Text>
        </VStack>
      </ImageBackground>
    </View>
  );
};

export default Splash;
