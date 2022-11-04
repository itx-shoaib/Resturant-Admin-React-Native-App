import { Button, Card, IconButton } from "react-native-paper";
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
    FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Datatable from '../Components/Datatable';
import MapView from 'react-native-maps'
import Navbar from "../Components/Navbar";


export default function Drawer() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
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
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}
                            onPress={RedirectToDashboard}
                        >Dashboard</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}
                            onPress={RedirectToOrder}
                        >Orders</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}
                            onPress={RedirectToRank}>
                            Ranks</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}
                            onPress={RedirectToResturant}
                        >Resturants</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}
                            onPress={RedirectToPage}
                        >Pages</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}>Tasks</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}
                            onPress={RedirectToOrdersReport}
                        >Reports</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}>Translation</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}
                            onPress={RedirectToChangePassword}
                        >Passwords</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}>Live Orders</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}
                            onPress={RedirectToCustomer}
                        >Customer</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}>Menu</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}>Settings</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                        <Button icon="camera" />
                        <Text style={{
                            margin: 10,
                            fontSize: 20
                        }}>Marketing</Text>
                    </View>

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