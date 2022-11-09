import * as React from 'react';
import { Button, Card, Switch, Badge } from "react-native-paper";
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


export default function Item() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const RedirectToPage = () => {
        navigation.navigate("Rank");
    }
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <ScrollView>
                <Card style={styles.orderInnerCard}>
                    <View style={{ margin: 7 }}>
                        <Text style={{ fontSize: 20, alignItems: "center" }}>Donner kebab</Text>

                        <View
                            style={{
                                borderBottomColor: 'black',
                                marginTop: 5,
                                marginBottom: 20,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <View style={{ padding: 10 }}>
                                <Text>Description</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
                                <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <Text>< Badge style={{ backgroundColor: "blue" }} size={25}> $7.00</ Badge></Text>
                                    <Text style={{ color: "#03cfb7" }}>Available</Text>
                                </View>

                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Image
                                        style={{ width: 40, height: 40 }}
                                        source={require('../assets/imageicon.png')}
                                    />
                                </View>


                            </View>
                        </View>
                    </View>
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
        marginTop: "2%",
        margin: 20,
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