import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  VStack,
  Text,
  Box,
  IconButton,
  Icon,
  Button,
  HStack,
  Center,
  Input,
  Stack,
  Progress,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {BackIcon} from '../../assets/icons';
import {fonts} from '../../utils';
import {getData, storeData} from '../../utils/AsyncStorage';
import {useForm} from '../../utils/useForm';

const ProfilingToken = ({navigation, route}) => {
  const [form, setForm] = useForm({
    otp: '',
  });
  const {username, uniqueId, sessionId, otpToken} = route.params;
  const [error, setError] = useState([]);
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');

  const config = {
    headers: {
      Authorization: 'Bearer 6|8TQY0Y1XCHrmOw0hWsLiNjkLPjEWuEqYdbmnbXqU',
    },
  };

  const submit = () => {
    getData('dataOtp').then(res => {
      const data = {
        username: username,
        uniqueId: uniqueId,
        sessionId: sessionId,
        otpToken: otpToken,
        otp: form.otp,
      };

      console.log(data)
      axios
        .post(
          'https://tanahin.mfaiztriputra.id/api/brick/confirmation', data, config)
        .then(res => {
          console.log('success', res);
          storeData('profile', res.data);
          navigation.navigate('Profiling', res.data);
        })
        .catch(err => {
          console.log('error:', err.response.data.message);
          // setError(err.response.data.message)
        });
    });
  };

  useEffect(() => {
    getData('users').then(res => {
      setToken(res.access_token);
    });
  }, []);
  return (
    <VStack px={'25px'} pt={'30px'} bg={'white'} h={'full'}>
      {/* bagian header authentication */}
      <Box alignItems="center" mb={'25px'}>
        <IconButton
          icon={<Icon as={<BackIcon />} />}
          borderRadius="full"
          bg={'#E9FAD8'}
          mr={'auto'}
          p={'2'}
          onPress={() => navigation.navigate('Profile')}
        />
      </Box>
      <Text
        fontSize={'18px'}
        fontFamily={'heading'}
        textAlign={'center'}
        mb={'20px'}
        fontWeight={'semibold'}>
        Verification OTP
      </Text>
      <Text
        color={'gray.400'}
        mr={1}
        textAlign={'center'}
        style={{fontFamily: fonts.primary.normal}}>
        Enter you Phone Number to Get Verification of Credit Number
      </Text>

      {/* bagian circular progress */}
      <Stack mt={'20px'} mb={'15px'}>
        <Text style={{fontFamily: fonts.primary.normal}} fontSize={'14px'}>
          OTP Number
        </Text>
        <Input
          placeholder="Enter your Phone Number"
          variant={'filled'}
          mt={'10px'}
          value={form.otp}
          onChangeText={value => setForm('otp', value)}
        />
        {error && <Text color={'red.400'}>{error.email}</Text>}
      </Stack>
      {/* bagian akhir circular */}
      <Button
        bg="#4FAD39"
        mt={'auto'}
        mb={'80px'}
        colorScheme={'success'}
        fontWeight={'semibold'}
        onPress={submit}>
        Verify Me
      </Button>
    </VStack>
  );
};

export default ProfilingToken;
