import * as React from 'react';
import { Button, Card, Switch } from "react-native-paper";
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


export default function ItemManagement() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const RedirectToPage = () => {
        navigation.navigate("Menu");
    }
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <Navbar />
            <ScrollView>
                <View style={{ margin: 20 }} >
                    <Text style={{
                        fontSize: 30
                    }}>ITEM MANAGEMENT</Text>
                </View>
                <Card style={styles.resturantCard}>
                    <View style={{ margin: 7, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>

                        <Text style={{
                            fontSize: 15
                        }}>ITEM MANAGEMENT</Text>

                        < Button icon="arrow-left"
                            color="blue"
                            mode="contained"
                            onPress={() => RedirectToPage()}
                        >back</Button>
                    </View>
                    <Card style={styles.orderInnerCard}>
                        <Text style={styles.labelText}>Item Name:</Text>
                        <TextInput
                            placeholder="Item name"
                            style={styles.Textfields}
                        ></TextInput>

                        <Text style={styles.labelText}>Item Description:</Text>
                        <TextInput
                            placeholder="Item Description"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>Item Price:</Text>
                        <TextInput
                            placeholder="Item Price"
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={styles.labelText}>VAT percentage:</Text>
                        <TextInput
                            placeholder="Item VAT percentage"
                            style={styles.Textfields}
                        ></TextInput>
                        <View style={{ margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 20, margin: 4 }}>Discountable</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <View style={{ margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 20, margin: 4 }}>Item Available</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <View style={{ margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 20, margin: 4 }}>Enable variants</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 15 }}>Available Days</Text>
                        <View style={{ margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 20, margin: 4 }}>Sunday</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <View style={{ margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 20, margin: 4 }}>Monday</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <View style={{ margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 20, margin: 4 }}>Tuesday</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <View style={{ margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 20, margin: 4 }}>Wednesday</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <View style={{ margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 20, margin: 4 }}>Thursday</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <View style={{ margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 20, margin: 4 }}>Friday</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <View style={{ margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 20, margin: 4 }}>Saturday</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <View style={{ alignItems: "flex-end", margin: 20 }}>
                            <Button mode="contained" onPress={() => RedirectToPage()}>Save</Button>
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
        marginBottom: 120,
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