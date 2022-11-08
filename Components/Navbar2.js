import * as React from 'react';
import { Button } from "react-native-paper";
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


export default function Navbar2() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [active, setActive] = React.useState('');
    const navigation = useNavigation();


    const RedirectToDrawer = () => {
        navigation.navigate("Translation");
    };
    const RedirectToProfile = () => {
        navigation.navigate("Language");
    };
    const RedirectToItems = () => {
        navigation.navigate("items");
    };
    const RedirectToCustomer = () => {
        navigation.navigate("Customer");
    };
    const RedirectToResturant = () => {
        navigation.navigate("Resturant");
    };
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View style={{ backgroundColor: '#fbfefa', position: "fixed" }}>


                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                    <View style={{ backgroundColor: '#f8f4fc', borderRadius: 10 }}>
                        <Button
                            icon="align-vertical-distribute"
                            onPress={RedirectToDrawer}
                        >Translation</Button>

                    </View>
                    <View style={{ backgroundColor: '#f8f4fc', borderRadius: 10, marginRight: 10 }}>
                        <Button
                            icon="account"
                            onPress={RedirectToProfile}
                        >Language</Button>
                    </View>

                </View>
            </View>
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