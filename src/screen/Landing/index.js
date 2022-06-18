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
import { LandingScreen } from '../../assets/dummy';

const Landing = ({navigation}) => {
  // console.log('image: ',landingImage)
  return (
      <VStack bg={"white"} h={"full"} px={"25px"}>
        <Box w="full" h="600px" justifyContent={"center"} alignItems={"center"}>
        <LandingScreen />
        </Box>
        <Stack space={"3"}>
        <Button colorScheme={"blue"} fontFamily={fonts.primary[600]} fontSize={20} fontWeight={"bold"} onPress={() => navigation.navigate('SignUp')}>
          Create a new account
        </Button>
        <Button colorScheme={"blue"} variant="outline" fontFamily={fonts.primary[600]} fontSize={20} fontWeight={"bold"} onPress={() => navigation.navigate('SignIn')}>
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