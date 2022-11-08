import { Button, List, Card, IconButton } from "react-native-paper";
import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image,
    ScrollView,
    Dimensions,
    Platform,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Datatable from '../Components/Datatable';
import MapView from 'react-native-maps'
import Navbar from "../Components/Navbar";


export default function Drawer() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [expanded, setExpanded] = React.useState(false);
    const handlePress = () => setExpanded(!expanded);
    const navigation = useNavigation();

    const RedirectToDashboard = () => {
        navigation.navigate("Dashboard");
    };
    const RedirectToOrder = () => {
        navigation.navigate("Order");
    };
    const RedirectToPage = () => {
        navigation.navigate("Page");
    };
    const RedirectToCustomer = () => {
        navigation.navigate("Customer");
    };
    const RedirectToResturant = () => {
        navigation.navigate("Resturant");
    };
    const RedirectToRank = () => {
        navigation.navigate("Rank");
    };
    const RedirectToChangePassword = () => {
        navigation.navigate("ChangePassword");
    };
    const RedirectToOrdersReport = () => {
        navigation.navigate("OrdersReport");
    };
    const RedirectToTranslation = () => {
        navigation.navigate("Translation");
    };

    const drawerlist = [
        {
            icon: "home",
            title: "Dashboard",
            path: RedirectToDashboard
        },
        {
            icon: "clipboard-list-outline",
            title: "Orders",
            path: RedirectToOrder
        },
        {
            icon: "podium",
            title: "Ranks",
            path: RedirectToRank
        },
        {
            icon: "silverware-fork-knife",
            title: "Resturants",
            path: RedirectToResturant
        },
        {
            icon: "calendar-text-outline",
            title: "Pages",
            path: RedirectToPage
        },
        {
            icon: "logout",
            title: "Tasks",
            path: RedirectToPage
        },
        {
            icon: "book",
            title: "Reports",
            path: RedirectToTranslation
        },
        {
            icon: "reflect-vertical",
            title: "Translation",
            path: RedirectToTranslation
        },
        {
            icon: "lock",
            title: "Passwords",
            path: RedirectToChangePassword
        },
        {
            icon: "logout",
            title: "Live Orders",
            path: RedirectToChangePassword
        },
        {
            icon: "account",
            title: "Customer",
            path: RedirectToCustomer
        },
        {
            icon: "logout",
            title: "Menu",
            path: RedirectToCustomer
        },
        {
            icon: "logout",
            title: "Settings",
            path: RedirectToCustomer
        },

    ]

    const marketinglist = [
        {
            icon: "home",
            title: "Discount",
            path: RedirectToDashboard
        },
        {
            icon: "home",
            title: "Bulk SMS",
            path: RedirectToDashboard
        },
        {
            icon: "home",
            title: "Share",
            path: RedirectToDashboard
        },
    ]
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View style={{ alignItems: "flex-start", backgroundColor: '#fbfefa' }}>
                <Button icon="arrow-left"
                    color="blue"
                    mode="text"
                    onPress={RedirectToDashboard}
                >
                    Back
                </Button>
            </View>
            <ScrollView>


                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", backgroundColor: '#fbfefa' }}>
                    {drawerlist.map((idx, index) => (
                        <TouchableOpacity onPress={idx.path
                        } key={idx.key}>
                            <List.Item
                                title={idx.title}
                                left={props => <List.Icon {...props} icon={idx.icon} color='black' />}
                            />
                        </TouchableOpacity>
                    ))}

                    <List.Section >
                        <List.Accordion
                            style={{ backgroundColor: '#fbfefa' }}
                            title="Marketing"
                            expanded={expanded}
                            onPress={handlePress}
                            left={props => <List.Icon {...props} icon="folder" color="black" />}>
                            {marketinglist.map((idx, index) => (
                                <TouchableOpacity onPress={idx.path
                                } key={idx.key}>
                                    <List.Item
                                        title={idx.title}
                                        left={props => <List.Icon {...props} icon={idx.icon} color='black' />}
                                    />
                                </TouchableOpacity>
                            ))}
                        </List.Accordion>
                    </List.Section>

                </View >
            </ScrollView>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    resturantCard: {
        marginTop: "30%",
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    resturantMainView: {
        paddingBottom: "20%",
        paddingTop: "20%",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",

    },
    closeIcon: {
        borderWidth: 1,
        borderColor: "Black",
        borderRadius: 50,
        backgroundColor: "red"
    },
    penIcon: {
        borderWidth: 1,
        borderColor: "Black",
        borderRadius: 50,
    },
    resturantText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    salevolumeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue"
    },
    viewsText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    contentContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40
    },
    scrollCardView: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 20,
        padding: 15
    }


});