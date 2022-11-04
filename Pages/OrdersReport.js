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
import Navbar from "../Components/Navbar";
import OrdersReportTable from "../Components/OrdersReportTable";


export default function OrdersReport() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();

    const RedirectToOrder = () => {
        navigation.navigate("Order");
    };
    const RedirectToliveOrder = () => {
        navigation.navigate("liveOrder");
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
            <Navbar />
            <ScrollView>



                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", backgroundColor: '#fbfefa' }}>
                    <ScrollView>
                        <View style={{ margin: 30 }}>
                            <Text style={{ fontSize: 30 }}>Orders Report</Text>
                        </View>
                        <ScrollView horizontal={true}  >
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: 40
                            }}>
                                <Card style={{
                                    borderRadius: 20,
                                    height: "75%",
                                    width: width / 2,
                                    margin: 20,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}

                                >
                                    <View style={styles.scrollCardView}>
                                        {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                        <Text style={styles.salevolumeText}>ORDERS</Text>
                                        <Text style={{ fontSize: 25, paddingTop: 20 }}>2585</Text>
                                    </View>
                                </Card>

                                <Card style={{
                                    borderRadius: 20,
                                    height: "75%",
                                    width: width / 2,
                                    margin: 20,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}

                                >
                                    <View style={styles.scrollCardView}>
                                        {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                        <Text style={styles.salevolumeText}>PLATFORM</Text>
                                        <Text style={{ fontSize: 20, paddingTop: 20 }}>$1,558.09</Text>
                                    </View>
                                </Card>

                                <Card style={{
                                    borderRadius: 20,
                                    height: "75%",
                                    width: width / 2,
                                    margin: 20,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}

                                >
                                    <View style={styles.scrollCardView}>
                                        {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                        <Text style={styles.salevolumeText}>PROCESSOR</Text>
                                        <Text style={{ fontSize: 20, paddingTop: 20 }}>$1,678.87</Text>
                                    </View>
                                </Card>

                                <Card style={{
                                    borderRadius: 20,
                                    height: "75%",
                                    width: width / 2,
                                    margin: 20,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}

                                >
                                    <View style={styles.scrollCardView}>
                                        {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                        <Text style={styles.salevolumeText}>NET</Text>
                                        <Text style={{ fontSize: 20, paddingTop: 20 }}>£56,321.39</Text>
                                    </View>
                                </Card>

                                <Card style={{
                                    borderRadius: 20,
                                    height: "75%",
                                    width: width / 2,
                                    margin: 20,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}

                                >
                                    <View style={styles.scrollCardView}>
                                        {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                        <Text style={styles.viewsText}>TOTAL</Text>
                                        <Text style={{ fontSize: 20, paddingTop: 20 }}>£59,558.33</Text>
                                    </View>
                                </Card>
                            </View>
                        </ScrollView>
                        <Card style={styles.resturantCard}>
                            <View style={{ margin: 20, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>

                                <Text style={{
                                    fontSize: 15
                                }}>ORDERS REPORT</Text>

                                < Button
                                    color="blue"
                                    mode="contained"

                                >$59,558.33</Button>
                            </View>
                            <Card style={styles.orderInnerCard}>
                                <OrdersReportTable />
                            </Card>
                        </Card>


                    </ScrollView>




                </View >
            </ScrollView>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    resturantCard: {
        marginTop: "15%",
        marginLeft: 30,
        marginRight: 30,
        marginBottom: "40%",
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
        alignItems: "center",
        margin: 20,
        padding: 15
    },
    orderInnerCard: {
        marginTop: "10%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },


});