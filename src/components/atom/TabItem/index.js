import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    Forum,
    ForumActive,
    Funding,
    FundingActive,
    Home,
    HomeActive,
    Profile,
    ProfileActive
} from '../../../assets/icons';
import { fonts } from '../../../utils';

const TabItem = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === 'Home') {
            return active ? <HomeActive /> : <Home />;
        }
        if (title === 'Forum') {
            return active ? <ForumActive /> : <Forum />;
        }
        if (title === 'Funding') {
            return active ? <FundingActive /> : <Funding />;
        }
        if (title === 'Profile') {
            return active ? <ProfileActive /> : <Profile />;
        }
        return <Home />
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: active => ({
        fontSize: 10,
        color: active ? '#2C96CA' : '#CECECE',
        fontFamily: fonts.primary.normal,
        marginTop: 4,
    }),
});
