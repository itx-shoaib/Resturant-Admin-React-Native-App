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


export default function MyProfile() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();

    const RedirectToChangePassword = () => {
        navigation.navigate("Dashboard");
    }
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <Navbar />
            <ScrollView>
                <View style={{ margin: 20 }} >
                    <Text style={{
                        fontSize: 30
                    }}>USER PROFILE</Text>
                </View>
                <Card style={styles.resturantCard}>
                    <View style={{ margin: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>

                        <Text style={{
                            margin: 5,
                            fontSize: 15
                        }}>USER PROFILE</Text>

                        {/* < Button icon="arrow-left"
                            color="blue"
                            mode="contained"
                            onPress={() => RedirectToPage()}
                        >back to Pages</Button> */}
                    </View>
                    <Card style={styles.orderInnerCard}>
                        <Text style={styles.labelText}>Name:</Text>
                        <TextInput
                            placeholder="Name"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Email:</Text>
                        <TextInput
                            placeholder="Email here"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Phone:</Text>
                        <TextInput
                            placeholder="Phone Number"
                            style={styles.Textfields}
                        ></TextInput>


                        <View style={{ alignItems: "flex-end", margin: 20 }}>
                            <Button mode="contained" onPress={() => RedirectToChangePassword()}>Update</Button>
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