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
import TranslationTable from '../Components/TranslationTable';


export default function Translation() {
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
            <Navbar />
            <ScrollView>
                <View style={{ margin: 20 }} >
                    <Text style={{
                        fontSize: 30
                    }}>TRANSLATION</Text>
                </View>
                <Card style={styles.resturantCard}>
                    <View style={{ margin: 7, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>

                        <Text style={{
                            fontSize: 15
                        }}>Translation</Text>

                        < Button icon="plus"
                            color="blue"
                            mode="contained"
                            onPress={() => RedirectToPage()}
                        >Add</Button>
                    </View>
                    <Card style={styles.orderInnerCard}>
                        <TranslationTable />
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