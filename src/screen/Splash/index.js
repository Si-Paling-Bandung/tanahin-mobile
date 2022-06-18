import { VStack, Text, HStack, Image, View, Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import { BackgroundSplash, HeroSplash, Logo } from '../../assets/dummy';
import { ImageBackground } from 'react-native'


const Splash = ({ navigation }) => {
    const [user] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if (user) {
              navigation.replace('MainApp');
            } else {
              navigation.replace('Landing');
            }
        }, 3500);
    }, [navigation]);

    return (
        <View>
            <ImageBackground source={require('../../assets/dummy/background_splash.png')} resizeMode={'cover'}>
                <VStack px={'25px'} pt={'40px'} h={'full'} w={'full'}>
                    {/* <Image alt="bg"/> */}
                    <Logo />
                    <Text fontWeight={'semibold'} fontSize={32}>Welcome</Text>
                    <HStack mb={'20px'}>
                        <Text fontWeight={'semibold'} fontSize={32}>to </Text>
                        <Text fontWeight={'bold'} fontSize={32} color={'info.600'}>Babaju</Text>
                    </HStack>
                    <Text fontSize={'16px'} color={'info.600'} fontWeight={'medium'}>Yang jelek bukan bajumu</Text>
                    <Text fontSize={'16px'} color={'info.600'} fontWeight={'medium'}>tapi cara berpakaianmu</Text>
                    <Icon as={<HeroSplash />} position="absolute" bottom="0" right="10" />
                </VStack>
            </ImageBackground>
        </View>
    );
};

export default Splash;

