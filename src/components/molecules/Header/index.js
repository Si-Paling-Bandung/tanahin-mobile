/* eslint-disable prettier/prettier */
import { Box, HStack, Icon, IconButton } from 'native-base';
import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackIcon, LikesButton } from '../../../assets/icons';
import { TOPNAVI_H, BANNER_H } from '../../../constants';

const TopNavigation = props => {
    const insets = useSafeAreaInsets();

    const { title, scrollA, navigation } = props;
    const isFloating = !!scrollA;
    const [isTransparent, setTransparent] = useState(isFloating);

    useEffect(() => {
        if (!scrollA) {
            return;
        }
        const listenerId = scrollA.addListener(a => {
            const topNaviOffset = BANNER_H - TOPNAVI_H - insets.top;
            isTransparent !== a.value < topNaviOffset &&
                setTransparent(!isTransparent);
        });
        return () => scrollA.removeListener(listenerId);
    });

    return (
        <>
            <StatusBar
                barStyle={isTransparent ? 'light-content' : 'dark-content'}
                backgroundColor="transparent"
                translucent
            />
            <HStack style={styles.container(insets, isFloating, isTransparent)}>
                <Box alignItems="center">
                    <IconButton icon={<Icon as={<BackIcon />} />}
                        borderRadius="full"
                        bg={"#E9FAD8"}
                        mr={"auto"}
                        p={'1'}
                        onPress={() => navigation.goBack()}
                    />
                </Box>
                <Box alignItems="center" mb={"25px"}>
                    <IconButton icon={<Icon as={<LikesButton />} />}
                        mr={"auto"}
                    />
                </Box>
            </HStack>
        </>
    );
};

const styles = {
    container: (insets, isFloating, isTransparent) => ({
        paddingTop: insets.top,
        marginBottom: isFloating ? -TOPNAVI_H - insets.top : 0,
        height: TOPNAVI_H + insets.top,
        justifyContent: 'space-between',
        shadowOffset: { y: 0 },
        backgroundColor: isTransparent ? '#0001' : '#FFF',
        shadowOpacity: isTransparent ? 0 : 0.5,
        elevation: isTransparent ? 0.01 : 5,
        zIndex: 100,
        paddingHorizontal: 20,
    }),
    title: isTransparent => ({
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: isTransparent ? '#FFF' : '#000',
    }),
};

export default TopNavigation;