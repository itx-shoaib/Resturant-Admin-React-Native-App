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
import ResturantTable from "../Components/ResturantTable"
import Navbar from "../Components/Navbar";


export default function Resturant() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const RedirectToResturantManagement = () => {
        navigation.navigate("ResturantManagement");
    }

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <Navbar />

            {/* <FilterOrder /> */}
            <View style={{ margin: 20 }}>
                <Text style={{
                    fontSize: 40
                }}>RESTURANTS</Text>
            </View>
            <Card style={styles.resturantCard}>
                <View style={{ margin: 20, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>

                    <Text style={{
                        fontSize: 15
                    }}>RESTURANTS</Text>

                    < Button icon="plus"
                        color="blue"
                        mode="contained"
                        onPress={() => RedirectToResturantManagement()}
                    >resturant</Button>
                </View>
                <Card style={styles.orderInnerCard}>
                    <ResturantTable />
                </Card>
            </Card>


        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    resturantCard: {
        marginTop: "5%",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 60,
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