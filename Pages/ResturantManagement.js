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
import Navbar from "../Components/Navbar";


export default function Clientlogin() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();

    const RedirectToResturant = () => {
        navigation.navigate("Resturant");
    }
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <Navbar />
            <ScrollView>
                <View style={{ margin: 20 }} >
                    <Text style={{
                        fontSize: 25
                    }}>RESTURANT MANAGEMENT</Text>
                </View>
                <Card style={styles.resturantCard}>
                    <View style={{ margin: 7, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>

                        <Text style={{
                            fontSize: 15
                        }}>Resturant Management</Text>

                        < Button icon="arrow-left"
                            color="blue"
                            mode="contained"
                            onPress={() => RedirectToResturant()}
                        >back to list</Button>
                    </View>
                    <Card style={styles.orderInnerCard}>
                        <Text style={styles.labelText}>Resturant Name:</Text>
                        <TextInput
                            placeholder="Resturant Name"
                            style={styles.Textfields}
                        ></TextInput>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                marginTop: 5,
                                marginBottom: 20,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <Text style={{ fontWeight: "bold", fontSize: 15, margin: 15 }} >Owner Information</Text>
                        <Text style={styles.labelText}>Name:</Text>
                        <TextInput
                            placeholder="Owner Name Here..."
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Owner Email:</Text>
                        <TextInput
                            placeholder="Owner Email Here..."
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Owner Address:</Text>
                        <TextInput
                            placeholder="Owner Address Here..."
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Owner Phone:</Text>
                        <TextInput
                            placeholder="Owner Phone Here..."
                            style={styles.Textfields}
                        ></TextInput>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                marginTop: 5,
                                marginBottom: 20,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <Text style={{ fontWeight: "bold", fontSize: 15, margin: 15 }} >Restaurant Configurations</Text>
                        <Text style={styles.labelText}>Restaurant Domain:</Text>
                        <TextInput
                            placeholder="Restaurant Domain"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Primary Color:</Text>
                        <TextInput
                            placeholder="Primary Color"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Secondary Color:</Text>
                        <TextInput
                            placeholder="Secondary Color"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>App Name:</Text>
                        <TextInput
                            placeholder="App Name"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Deleivery Intervals in Mins:</Text>
                        <TextInput
                            placeholder="Deleivery Intervals in Mins"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Enable Location Search:</Text>
                        <TextInput
                            placeholder="Enable Location Search"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Enable Stripe Connect:</Text>
                        <TextInput
                            placeholder="Enable Stripe Connect"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Enable Stripe:</Text>
                        <TextInput
                            placeholder="Enable Stripe"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Stripe Key:</Text>
                        <TextInput
                            placeholder="Stripe Key"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Stripe Secret:</Text>
                        <TextInput
                            placeholder="Stripe Secret"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Google Maps API Key:</Text>
                        <TextInput
                            placeholder="Google Maps API Key"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Google Analytics:</Text>
                        <TextInput
                            placeholder="Google Analytics"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Google Client ID:</Text>
                        <TextInput
                            placeholder="Google Client ID"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Google Client Secret:</Text>
                        <TextInput
                            placeholder="Google Client Secret"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Google Redirect:</Text>
                        <TextInput
                            placeholder="Google Redirect"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Facebook Client ID:</Text>
                        <TextInput
                            placeholder="Facebook Client ID"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Facebook Client Secret:</Text>
                        <TextInput
                            placeholder="Facebook Client Secret"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Facebook Redirect:</Text>
                        <TextInput
                            placeholder="Facebook Redirect"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Onesignal App ID:</Text>
                        <TextInput
                            placeholder="Onesignal App ID"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Onesignal Rest API Key:</Text>
                        <TextInput
                            placeholder="Onesignal Rest API Key"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Send SMS Notifications:</Text>
                        <TextInput
                            placeholder="Send SMS Notifications"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Optomany Enabled:</Text>
                        <TextInput
                            placeholder="Optomany Enabled"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Optomany Client ID:</Text>
                        <TextInput
                            placeholder="Optomany Client ID"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Optomany Client Secret:</Text>
                        <TextInput
                            placeholder="Optomany Client Secret"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Optomany Terminal ID:</Text>
                        <TextInput
                            placeholder="Optomany Terminal ID"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Optomany Test Mode:</Text>
                        <TextInput
                            placeholder="Optomany Test Mode"
                            style={styles.Textfields}
                        ></TextInput>
                        <View style={{ alignItems: "flex-end", margin: 20 }}>
                            <Button mode="contained" onPress={() => RedirectToResturant()}>Save</Button>
                        </View>
                    </Card>

                </Card>
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
    Textfields: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        margin: 10,
    },
    labelText: {
        fontSize: 15,
        margin: 12
    }
});