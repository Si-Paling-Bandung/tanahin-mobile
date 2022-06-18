import React from 'react';
import {
    BidDetail,
    BidSuccess,
    DataStore,
    DataStoreSuccess,
    DetailProduct,
    DetailProductBuy,
    Forum,
    Funding,
    Home,
    Landing,
    ProductBuyDetail,
    ProductBuyNotification,
    ProductBuySend,
    ProductBuyVirtual,
    Profile,
    Rent,
    Rents,
    RentsDetail,
    Sell,
    SignIn,
    SignUp,
    SignUpPassword,
    Splash,
    VerificationCode,
    FundDetail
} from '../screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Forum"
                component={Forum}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Funding"
                component={Funding}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Landing"
                component={Landing}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DataStore"
                component={DataStore}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Verification"
                component={VerificationCode}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpPasword"
                component={SignUpPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DataStoreSuccess"
                component={DataStoreSuccess}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetailProduct"
                component={DetailProduct}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BidDetail"
                component={BidDetail}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BidSuccess"
                component={BidSuccess}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetailProductBuy"
                component={DetailProductBuy}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProductBuyDetail"
                component={ProductBuyDetail}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProductBuySend"
                component={ProductBuySend}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProductBuyVirtual"
                component={ProductBuyVirtual}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProductBuyNotification"
                component={ProductBuyNotification}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Sell"
                component={Sell}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Rents"
                component={Rents}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RentsDetail"
                component={RentsDetail}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FundDetail"
                component={FundDetail}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default Router;