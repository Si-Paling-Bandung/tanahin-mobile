/* eslint-disable react/self-closing-comp */
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  ScrollView,
  Stack,
  StatusBar,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, useWindowDimensions } from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import {
  BackIcon,
  CategoriesLand,
  ColorPalette,
  Description,
  LikesButton,
  Person,
  Post,
  Shirt,
  StarReview,
  StoreIcon,
  Timer,
} from '../../assets/icons';
import { ReviewCard } from '../../components';
import TopNavigation from '../../components/molecules/Header';
import { BANNER_H } from '../../constants';

const Ukuran = [
  {
    id: 1,
    detail: 'S',
  },
  {
    id: 2,
    detail: 'M',
  },
  {
    id: 3,
    detail: 'L',
  },
  {
    id: 4,
    detail: 'XL',
  },
  {
    id: 5,
    detail: 'XXL',
  },
];

const Color = [
  {
    id: 1,
    color: '#E30030',
  },
  {
    id: 2,
    color: '#D36F23',
  },
  {
    id: 3,
    color: '#E294A5',
  },
  {
    id: 4,
    color: '#00E340',
  },
  {
    id: 5,
    color: '#4E8CD7',
  },
];

const FirstRoute = () => (
  <View style={{ flex: 1, paddingVertical: 20 }}>
    {/* bagian detail */}
    <VStack px={'25px'} h={'full'} >
      <HStack alignItems={'center'}>
        <Icon as={<Description />} mr={'3px'} />
        <Heading fontSize={'14'} fontWeight={'medium'}>
          Description of Land
        </Heading>
      </HStack>
      <Text fontSize={'12px'} fontFamily={'body'} pl={'25px'} mb={'10px'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna
        facilisi sed blandit bibendum dictum magna ut suscipit. Vitae
        habitasse enim, aliquam dictumst nec
      </Text>

      <HStack alignItems={'center'}>
        <Icon as={<CategoriesLand />} mr={'3px'} />
        <Heading fontSize={'14'} fontWeight={'medium'}>
          Category of Land
        </Heading>
      </HStack>
      <Text fontSize={'12px'} fontFamily={'body'} pl={'25px'} mb={'10px'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna
        facilisi sed blandit bibendum dictum magna ut suscipit. Vitae
        habitasse enim, aliquam dictumst nec
      </Text>

      <HStack alignItems={'center'}>
        <Icon as={<Person />} mr={'3px'} />
        <Heading fontSize={'14'} fontWeight={'medium'}>
          Suitable For
        </Heading>
      </HStack>
      <Text fontSize={'12px'} fontFamily={'body'} pl={'25px'} mb={'10px'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna
        facilisi sed blandit bibendum dictum magna ut suscipit. Vitae
        habitasse enim, aliquam dictumst nec
      </Text>
      <Text mt={'4'} mb={'10'}>
        Review Produk (87)
      </Text>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </VStack>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#32a852' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
  <TabBar
    {...props}
    // tabStyle={{ backgroundColor: '#fff', marginTop: 0 }}
    indicatorStyle={{ backgroundColor: '#4FAD39', paddingBottom: 5 }}
    style={{ backgroundColor: 'white', elevation: 0 }}
    renderLabel={({ route, focused, color }) => (
      <HStack style={{ paddingVertical: 5, paddingHorizontal: 15, borderRadius: 10, margin: 8 }}>
        <Text fontWeight={'semibold'} color={`${focused} ? 'black' : #C5C5C7'`}>
          {route.title}
        </Text>
      </HStack>
    )}
  />
);

const DetailProduct = ({ navigation }) => {
  const [checked, setChecked] = useState('');
  const [index, setIndex] = React.useState(0);
  const [checked2, setChecked2] = useState('');
  const scrollA = useRef(new Animated.Value(0)).current;
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: 'first', title: 'Details' },
    { key: 'second', title: 'Analysis' },
  ]);
  return (
    <VStack h={'full'} bg={'white'}>
      {/* <HStack position={"absolute"} mb={"25px"} zIndex={1} top="0" bg={'white:alpha.20'}>
                <Box alignItems="center" position={"relative"} width={'100%'} mb={"25px"} zIndex={1} top="5" left="5">
                    <IconButton icon={<Icon as={<BackIcon />} />}
                        borderRadius="full"
                        bg={"#E9FAD8"}
                        mr={"auto"}
                        p={'1.5'}
                        onPress={() => navigation.goBack()}
                    />
                </Box>
                <Box alignItems="center" mb={"25px"} position={"absolute"} zIndex={1} top="5" right="5">
                    <IconButton icon={<Icon as={<LikesButton />} />}
                        mr={"auto"}
                    />
                </Box>
            </HStack> */}
      <TopNavigation scrollA={scrollA} title="detail" navigation={navigation} />
      <Animated.ScrollView
        alwaysBounceVertical
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}>
        {/* <View>
                    <Animated.Image
                        style={style.banner(scrollA)}
                        source={{ uri: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774' }}
                        alt="foto"
                    >
                    </Animated.Image>
                </View> */}
        <VStack bg={'white'} flex={1} style={style.bannerContainer}>
          {/* <AspectRatio w={'full'} ratio={9 / 9}> */}
          <Animated.Image
            style={style.banner(scrollA)}
            source={{
              uri: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774',
            }}
            alt="foto"></Animated.Image>
          {/* </AspectRatio> */}
          <VStack
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems="center"
            position={'absolute'}
            borderRadius={10}
            w={'110px'}
            h={'35px'}
            justifyContent={'center'}
            bg={'warning.500'}
            color={'white'}
            bottom={'10'}
            left={'5'}>
            <Icon as={<Timer />} />
            <Text color={'white'} ml={2}>
              03:00:00
            </Text>
          </VStack>
        </VStack>
        {/* bagian deskripsi dan review */}
        <VStack bg={'white'} h={'1100px'} w="full" position={'relative'} py={'7'} mb={50} top={'-20'} roundedTop={'3xl'}>
          <HStack alignItems={'center'} px={'25px'} mb={3}>
            <VStack>
              <Heading fontSize={'18px'} mb={2}>
                Living Land Jakarta
              </Heading>
              <HStack alignItems={'center'} space={3}>
                <Heading
                  color={'warning.500'}
                  fontWeight={'semibold'}
                  fontSize={'20px'}>
                  Rp 100.000.000
                </Heading>
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  style={{
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                  }}
                  ml="-0.5"
                  color={'muted.400'}
                  mt="-1">
                  Rp 130.000.000
                </Text>
              </HStack>
            </VStack>
            <Center ml={'auto'} w={8} h={8} rounded={'md'} bg={'warning.200'}>
              <Text color={'warning.500'} fontSize={'12px'}>
                65%
              </Text>
            </Center>
          </HStack>


          {/* tabview */}
          <VStack h={'100%'}>
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ initialLayout }}
              style={style.container}
              renderTabBar={renderTabBar}
            />
          </VStack>
        </VStack>
      </Animated.ScrollView>
      <HStack
        position={'absolute'}
        zIndex={1}
        bottom={2}
        space={3}
        w={'full'}
        px={'25px'}>
        <Button variant={'outline'} bg={'white'} borderColor={'#4FAD39'} w={'50%'}>
          Paid Full
        </Button>
        <Button bg={'#4FAD39'} w={'50%'} onPress={() => navigation.navigate('BidDetail')}>
          Bid
        </Button>
      </HStack>
    </VStack>
  );
};

const style = StyleSheet.create({
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),

  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },

  container: {
    marginTop: StatusBar.currentHeight,
  },

  scene: {
    flex: 1,
  },
});

export default DetailProduct;
