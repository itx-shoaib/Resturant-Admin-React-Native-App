import { Button, Card, Avatar, List } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function Profile() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const RedirectToPastOrders = () => {
        navigation.navigate("Order");
    };
    const RedirectToLogin = () => {
        navigation.navigate("Login");
    };
    const RedirectToDashboard = () => {
        navigation.navigate("Dashboard");
    };
    const RedirectToResturant = () => {
        navigation.navigate("Resturant");
    };
    const RedirectToCustomer = () => {
        navigation.navigate("Customer");
    };
    const RedirectToPage = () => {
        navigation.navigate("Page");
    };
    const RedirectToEditProfile = () => {
        navigation.navigate("Edit-Profile");
    };
    const RedirectToChangePassword = () => {
        navigation.navigate("Change-Password");
    };
    const RedirectToMyAddresses = () => {
        navigation.navigate("My-Addresses");
    };
    const RedirectToMyProfile = () => {
        navigation.navigate("MyProfile");
    };
    const RedirectToSetting = () => {
        navigation.navigate("Setting");
    };
    const settingmenu = [
        {
            icon: "account-edit",
            title: "My Profile",
            path: RedirectToMyProfile
        },
        {
            icon: "home",
            title: "Dashboard",
            path: RedirectToDashboard
        },
        {
            icon: "logout",
            title: "Live Orders",
            path: RedirectToLogin
        },
        {
            icon: "clipboard-list-outline",
            title: "Orders",
            path: RedirectToPastOrders
        },
        {
            icon: "silverware-fork-knife",
            title: "Resturants",
            path: RedirectToResturant
        },
        {
            icon: "account",
            title: "Customers",
            path: RedirectToCustomer
        },
        {
            icon: "calendar-text-outline",
            title: "Pages",
            path: RedirectToPage
        },
        {
            icon: "cog",
            title: "Settings",
            path: RedirectToSetting
        },
        {
            icon: "logout",
            title: "Logout",
            path: RedirectToLogin
        },



    ]
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View style={{ display: 'flex', flexDirection: 'column', height: height, justifyContent: 'space-between', backgroundColor: 'white', overflow: 'hidden' }}>
                <Card style={{
                    margin: 10, padding: 10, shadowColor: 'black', borderRadius: 16,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 20,
                }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20, height: height / 3 }}>
                        <Image source={require('../assets/Settings.gif')} style={{ height: height / 4, width: width / 2 }}></Image>
                        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Settings</Text>
                    </View>

                </Card>
                <ScrollView>
                    {settingmenu.map((idx, index) => (
                        <TouchableOpacity onPress={idx.path
                        } key={idx.key}>
                            <List.Item
                                title={idx.title}
                                left={props => <List.Icon {...props} icon={idx.icon} color='black' />}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView >

    );
}