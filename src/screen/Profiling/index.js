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

const Profiling = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });;
  const [error, setError] = useState([]);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('')

  const config = {
    Headers: {
      Authorization: `Bearer 3|c73ujsn3CUdA8XMtqiaRdSBj9f2UUMN39kBI3x21`,
    },
  };

  const submit = () => {
    const data = {
      email: form.email,
      password: form.password,
    }
    axios
      .post('https://tanahin.mfaiztriputra.id/api/login', data, config)
      .then(res => {
        console.log('success', res.data);
        storeData('users', res.data);
        navigation.navigate('MainApp');
      })
      .catch(err => {
        console.log('error:', err.response.data.message);
        setError(err.response.data.message);
      });
  };

  useEffect(() => {
    getData('users').then(res => {
      setData(res);
    });

    getData('profile').then(res => {
        setValue((res.profiling / 1000000).toFixed(2))
        if(value > 0 && value < 8){
            setStatus('low')
            setColor('red.400')
        }else if (value < 20 && value > 8){
            setStatus('medium')
            setColor('yellow.400')
        }else if (value > 20){
            setStatus('high')
            setColor('lime.500')
        }else {
            setStatus('unverified')
            setColor('red.400')
        }
    }).catch(err => {
        console.log(err)
    })

  }, [value]);
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
        color={'gray.400'}
        mr={1}
        style={{fontFamily: fonts.primary.normal}}>
        Hello, {data?.data_user?.name}
      </Text>
      <Text fontSize={'18px'} fontFamily={'heading'} fontWeight={'semibold'}>
        Your Credit Summary
      </Text>

      {/* bagian circular progress */}
      <VStack>
        <Text textAlign={'center'} fontSize={'50px'} fontWeight={'semibold'}>
          {value}
        </Text>
        <Box w="100%">
          <Progress
            value={value}
            size={'lg'}
            bg="coolGray.100"
            _filledTrack={{
              bg: `${color}`,
            }}
            max={20}
          />
        </Box>
        <HStack justifyContent={'space-between'} mt={'10px'}>
            <Text>0</Text>
            <Text>
                {
                    status
                }
            </Text>
            <Text>20</Text>
        </HStack>
      </VStack>
      {/* bagian akhir circular */}
      <Button
        bg="#4FAD39"
        mt={'auto'}
        mb={'80px'}
        colorScheme={'success'}
        fontWeight={'semibold'}
        onPress={() => navigation.navigate('ProfilingData')}>
        Update
      </Button>
    </VStack>
  );;
};

export default Profiling
