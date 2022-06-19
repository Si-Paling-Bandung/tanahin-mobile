import React from 'react'
import {
  Box,
  Center,
  HStack,
  VStack,
  Text,
  Input,
  Icon,
  Button,
  Image,
  Progress,
  Stack
} from 'native-base';
import {fonts} from '../../utils'
import { Auth, LandingScreen } from '../../assets/dummy';

const Landing = ({navigation}) => {
  // console.log('image: ',landingImage)
  return (
      <VStack bg={"white"} h={"full"} px={"25px"}>
        <Box w="full" h="600px" justifyContent={"center"} alignItems={"center"}>
        <Auth />
        </Box>
        <Stack space={"3"}>
        <Button bg={'#4FAD39'} colorScheme={"success"} fontFamily={fonts.primary[600]} fontSize={20} fontWeight={"bold"} onPress={() => navigation.navigate('SignUp')}>
          Create a new account
        </Button>
        <Button colorScheme={"success"} variant="outline" fontFamily={fonts.primary[600]} fontSize={20} fontWeight={"bold"} onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Button>
        <Button variant="unstyled">
          <Text color="gray.400">Show more</Text>
          </Button>
        </Stack>
      </VStack>
  )
}

export default Landing