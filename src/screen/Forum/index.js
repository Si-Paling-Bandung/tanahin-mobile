import { Box, Heading, HStack, Icon, Input, Text, VStack, ScrollView, Button, Center, View, Image, Stack } from 'native-base'
import React from 'react'
import { Dimensions, StatusBar, StyleSheet, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Comment, Like, Logo, More, News, NewsInactive, Post, PostInactive, Reply, Search, Thumb, Tips, TipsInactive, Transaction } from '../../assets/icons'

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#F5F5F5', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 20, paddingTop: 25 }}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* bagian card post */}
      <VStack bg={'white'} rounded={'xl'} mt={'2'} mb={'20px'} p={'5'}>
        <HStack>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772',
            }}
            alt="images"
            size={50}
            resizeMode="contain"
            borderRadius={100}
          />
          <Stack mx={'5'} mb={'20px'}>
            <Text style={{ marginBottom: 8 }}>Savannah Nguyen</Text>
            <Text>19 Jun 2022 - 09.30 AM</Text>
          </Stack>
          <More />
        </HStack>
        <Text color={'gray.400'} mb={'2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat gravida at semper aliquam et. Tristique ac viverra pharetra nulla pulvinar. Tellus ridiculus porta et etiam aliquet ultrices amet. Nisl, lorem habitant elit euismod.
        </Text>
        <HStack>
          <Text color='#32a852' mr='2'>#ask</Text>
          <Text color='#32a852' mr='2'>#land</Text>
          <Text color='#32a852' mr='2'>#ForLiving</Text>
        </HStack>
        <HStack justifyContent={'space-between'} mt={'3'}>
          <HStack>
            <Thumb />
            <Text ml={'2'} mr={'3'}>1.920</Text>
            <Comment />
            <Text ml={'2'}>1.920</Text>
          </HStack>
          <Reply />
        </HStack>
      </VStack>
      {/* bagian akhir post */}
      {/* bagian card post */}
      <VStack bg={'white'} rounded={'xl'} mt={'2'} mb={'20px'} p={'5'}>
        <HStack>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772',
            }}
            alt="images"
            size={50}
            resizeMode="contain"
            borderRadius={100}
          />
          <Stack mx={'5'} mb={'20px'}>
            <Text style={{ marginBottom: 8 }}>Savannah Nguyen</Text>
            <Text>19 Jun 2022 - 09.30 AM</Text>
          </Stack>
          <More />
        </HStack>
        <Text color={'gray.400'} mb={'2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat gravida at semper aliquam et. Tristique ac viverra pharetra nulla pulvinar. Tellus ridiculus porta et etiam aliquet ultrices amet. Nisl, lorem habitant elit euismod.
        </Text>
        <HStack>
          <Text color='#32a852' mr='2'>#ask</Text>
          <Text color='#32a852' mr='2'>#land</Text>
          <Text color='#32a852' mr='2'>#ForLiving</Text>
        </HStack>
        <HStack justifyContent={'space-between'} mt={'3'}>
          <HStack>
            <Thumb />
            <Text ml={'2'} mr={'3'}>1.920</Text>
            <Comment />
            <Text ml={'2'}>1.920</Text>
          </HStack>
          <Reply />
        </HStack>
      </VStack>
      {/* bagian akhir post */}
      {/* bagian card post */}
      <VStack bg={'white'} rounded={'xl'} mt={'2'} mb={'20px'} p={'5'}>
        <HStack>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772',
            }}
            alt="images"
            size={50}
            resizeMode="contain"
            borderRadius={100}
          />
          <Stack mx={'5'} mb={'20px'}>
            <Text style={{ marginBottom: 8 }}>Savannah Nguyen</Text>
            <Text>19 Jun 2022 - 09.30 AM</Text>
          </Stack>
          <More />
        </HStack>
        <Text color={'gray.400'} mb={'2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat gravida at semper aliquam et. Tristique ac viverra pharetra nulla pulvinar. Tellus ridiculus porta et etiam aliquet ultrices amet. Nisl, lorem habitant elit euismod.
        </Text>
        <HStack>
          <Text color='#32a852' mr='2'>#ask</Text>
          <Text color='#32a852' mr='2'>#land</Text>
          <Text color='#32a852' mr='2'>#ForLiving</Text>
        </HStack>
        <HStack justifyContent={'space-between'} mt={'3'}>
          <HStack>
            <Thumb />
            <Text ml={'2'} mr={'3'}>1.920</Text>
            <Comment />
            <Text ml={'2'}>1.920</Text>
          </HStack>
          <Reply />
        </HStack>
      </VStack>
      {/* bagian akhir post */}
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
    <ScrollView>
      {/* bagian card news */}
      <HStack bg={'white'} p={'5'}>
        <VStack w={'70%'}>
          <Text fontSize={'13px'}>Seluruh Tanah Sudah Harus Disertifikatkan pada Tahun 2025</Text>
          <Text fontSize={'12px'} color={"#A6A6A6"} my={'2'}>Dalam rangka mendukung Progra...</Text>
          <Text fontSize={'12px'}>19 Jun 2022</Text>
        </VStack>
        <Image
          source={{
            uri: 'https://awsimages.detik.net.id/community/media/visual/2022/05/03/presiden-joko-widodo-jokowi-3_169.jpeg?w=1200'
          }}
          alt="images"
          size={100}
          resizeMode="contain"
          borderRadius={10}
        />
      </HStack>
      {/* bagian akhir card news */}
      {/* bagian card news */}
      <HStack bg={'white'} p={'5'}>
        <VStack w={'70%'}>
          <Text fontSize={'13px'}>Seluruh Tanah Sudah Harus Disertifikatkan pada Tahun 2025</Text>
          <Text fontSize={'12px'} color={"#A6A6A6"} my={'2'}>Dalam rangka mendukung Progra...</Text>
          <Text fontSize={'12px'}>19 Jun 2022</Text>
        </VStack>
        <Image
          source={{
            uri: 'https://awsimages.detik.net.id/community/media/visual/2022/05/03/presiden-joko-widodo-jokowi-3_169.jpeg?w=1200'
          }}
          alt="images"
          size={100}
          resizeMode="contain"
          borderRadius={10}
        />
      </HStack>
      {/* bagian akhir card news */}
      {/* bagian card news */}
      <HStack bg={'white'} p={'5'}>
        <VStack w={'70%'}>
          <Text fontSize={'13px'}>Seluruh Tanah Sudah Harus Disertifikatkan pada Tahun 2025</Text>
          <Text fontSize={'12px'} color={"#A6A6A6"} my={'2'}>Dalam rangka mendukung Progra...</Text>
          <Text fontSize={'12px'}>19 Jun 2022</Text>
        </VStack>
        <Image
          source={{
            uri: 'https://awsimages.detik.net.id/community/media/visual/2022/05/03/presiden-joko-widodo-jokowi-3_169.jpeg?w=1200'
          }}
          alt="images"
          size={100}
          resizeMode="contain"
          borderRadius={10}
        />
      </HStack>
      {/* bagian akhir card news */}
      {/* bagian card news */}
      <HStack bg={'white'} p={'5'}>
        <VStack w={'70%'}>
          <Text fontSize={'13px'}>Seluruh Tanah Sudah Harus Disertifikatkan pada Tahun 2025</Text>
          <Text fontSize={'12px'} color={"#A6A6A6"} my={'2'}>Dalam rangka mendukung Progra...</Text>
          <Text fontSize={'12px'}>19 Jun 2022</Text>
        </VStack>
        <Image
          source={{
            uri: 'https://awsimages.detik.net.id/community/media/visual/2022/05/03/presiden-joko-widodo-jokowi-3_169.jpeg?w=1200'
          }}
          alt="images"
          size={100}
          resizeMode="contain"
          borderRadius={10}
        />
      </HStack>
      {/* bagian akhir card news */}
      {/* bagian card news */}
      <HStack bg={'white'} p={'5'}>
        <VStack w={'70%'}>
          <Text fontSize={'13px'}>Seluruh Tanah Sudah Harus Disertifikatkan pada Tahun 2025</Text>
          <Text fontSize={'12px'} color={"#A6A6A6"} my={'2'}>Dalam rangka mendukung Progra...</Text>
          <Text fontSize={'12px'}>19 Jun 2022</Text>
        </VStack>
        <Image
          source={{
            uri: 'https://awsimages.detik.net.id/community/media/visual/2022/05/03/presiden-joko-widodo-jokowi-3_169.jpeg?w=1200'
          }}
          alt="images"
          size={100}
          resizeMode="contain"
          borderRadius={10}
        />
      </HStack>
      {/* bagian akhir card news */}
    </ScrollView>
  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#32a852' }} />
);

const renderTabBar = props => (
  <TabBar
    {...props}
    tabStyle={{ backgroundColor: 'white', marginTop: 0, shadowOpacity: 0 }}
    indicatorStyle={{ backgroundColor: 'none' }}
    style={{ marginTop: 0, elevation: 0 }}
    renderLabel={({ route, focused, color }) => (
      <HStack style={{ color: focused ? '#4FAD39' : 'gray', backgroundColor: focused ? '#E9FAD8' : 'none', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 10, margin: 8 }}>
        <Icon
          as={focused ? route.icon : route.iconInactive}
          color={'#4FAD39'}
          mr={3}
        />
        <Text>
          {route.title}
        </Text>
      </HStack>
    )}
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const initialLayout = { width: Dimensions.get('window').width };

const Forum = () => {
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();
  const [routes] = React.useState([
    { key: 'first', title: 'Posts', icon: <Post />, iconInactive: <PostInactive /> },
    { key: 'second', title: 'News', icon: <News />, iconInactive: <NewsInactive /> },
    { key: 'third', title: 'Tips', icon: <Tips />, iconInactive: <TipsInactive /> },
  ]);

  return (
    <VStack h={'100%'} bg={'white'}>
      {/* <ScrollView showsVerticalScrollIndicator={false} > */}
      <VStack h={'100%'}>
        <VStack px={'25px'} pt={'30px'} >
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Logo />
          </HStack>
          <Center h="20">
            <Input
              w={'full'}
              borderRadius={'10px'}
              bg={'#FAFAFA'}
              InputLeftElement={
                <Icon as={<Search />} size={5} ml="3" color="muted.400" />
              }
              placeholder="Search information about land"
              color={'#C4C5C4'}
            />
          </Center>
        </VStack>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ initialLayout }}
          style={styles.container}
          renderTabBar={renderTabBar}
        />
      </VStack>
      {/* <HStack mb={'6'} mt={'5'} justifyContent={'space-between'}>
          <Button px={'10'} rounded={'xl'} colorScheme={'blue'} InputLeftElement={<Icon as={<Transaction />} />}>
            Posts
          </Button>
          <Button px={'10'} rounded={'xl'} colorScheme={'blue'} InputLeftElement={<Icon as={<Transaction />} />}>
            News
          </Button>
          <Button px={'10'} rounded={'xl'} colorScheme={'blue'} InputLeftElement={<Icon as={<Transaction />} />}>
            Tips
          </Button>
        </HStack>
        <VStack borderWidth={1} borderColor={'gray.300'} rounded={'xl'} mt={'2'} p={'3'}>
          <HStack mt={'2'}>
            <Text mb={'2'}>Tentang Campaign</Text>
          </HStack>
          <Text color={'gray.400'} mb={'2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>
          <Text color={'gray.400'} ml={'auto'} mb={'2'}>2 Days Ago</Text>
        </VStack>
        <VStack borderWidth={1} borderColor={'gray.300'} rounded={'xl'} mt={'2'} p={'3'}>
          <HStack mt={'2'}>
            <Text mb={'2'}>Tentang Campaign</Text>
          </HStack>
          <Text color={'gray.400'} mb={'2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>
          <Text color={'gray.400'} ml={'auto'} mb={'2'}>2 Days Ago</Text>
        </VStack>
        <VStack borderWidth={1} borderColor={'gray.300'} rounded={'xl'} mt={'2'} p={'3'}>
          <HStack mt={'2'}>
            <Text mb={'2'}>Tentang Campaign</Text>
          </HStack>
          <Text color={'gray.400'} mb={'2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>
          <Text color={'gray.400'} ml={'auto'} mb={'2'}>2 Days Ago</Text>
        </VStack>
        <VStack borderWidth={1} borderColor={'gray.300'} rounded={'xl'} mt={'2'} p={'3'} mb={'5'}>
          <HStack mt={'2'}>
            <Text mb={'2'}>Tentang Campaign</Text>
          </HStack>
          <Text color={'gray.400'} mb={'2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>
          <Text color={'gray.400'} ml={'auto'} mb={'2'}>2 Days Ago</Text>
        </VStack> */}
      {/* </ScrollView> */}
    </VStack>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});

export default Forum