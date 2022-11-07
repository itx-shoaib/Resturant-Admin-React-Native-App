import { Button, Card } from "react-native-paper";
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
    SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FilterOrder from "../Components/FilterOrder";
import OrdersTable from "../Components/OrdersTable";
import Navbar from "../Components/Navbar";


export default function Order() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();

    const RedirectToDashboard = () => {
        navigation.navigate("Dashboard");
    };
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <Navbar />
            <ScrollView>
                <View style={{ margin: 20 }}>
                    <Text style={{
                        fontSize: 60
                    }}>ORDERS</Text>
                </View>
                <View style={{ margin: 20 }}>

                    <FilterOrder />
                </View>
                <View style={{ marginBottom: 120 }}>


                    <Card style={styles.resturantCard}>
                        <View style={{ margin: 20 }}>

                            <Text style={{
                                fontSize: 20
                            }}>Order History</Text>
                        </View>
                        <Card style={styles.orderInnerCard}>
                            <OrdersTable />
                        </Card>
                    </Card>


                    <Card style={styles.resturantCard}>
                        <View style={{ margin: 20 }}>

                            <Text style={{
                                fontSize: 20
                            }}>Order History</Text>
                        </View>
                        <Card style={styles.orderInnerCard}>
                            <OrdersTable />
                        </Card>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
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