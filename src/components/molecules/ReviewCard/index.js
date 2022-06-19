import { View, Text } from 'react-native'
import React from 'react'
import { HStack, Image, Stack, VStack } from 'native-base'
import { StarReview } from '../../../assets/icons'

const ReviewCard = () => {
    return (
        <VStack>
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
                <Stack mx={'5'}>
                    <Text style={{marginBottom: 8}}>Savannah Nguyen</Text>
                    <StarReview />
                </Stack>
                <Text style={{ marginLeft: 60, color: '#A6A6A6' }}>2 hari yang lalu</Text>
            </HStack>
            <Text style={{marginTop: 10}}>
                Produk nya sangat baik, dari segi kualitas bahan serta pengiriman saya sangat suka sekali. Apalagi seller nya sangat ramah dan seller nya juga memiliki banyak kustomisasi sehingga memudahkan saya untuk mencari yang sesuai.
            </Text>
        </VStack>
    )
}

export default ReviewCard