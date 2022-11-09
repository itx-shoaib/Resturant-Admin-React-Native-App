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


export default function MenuIcon() {
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
            <View style={{ margin: 20, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                < Button icon="plus"
                    color="#5BB8EE"
                    mode="contained"
                // onPress={showModal}
                ></Button>
                < Button icon="pen"
                    color="orange"
                    mode="contained"
                // onPress={showModal}
                ></Button>
                < Button icon="delete-forever"
                    color="red"
                    mode="contained"
                // onPress={showModal}
                ></Button>
                < Button icon="arrow-up-thick"
                    color="#03cfb7"
                    mode="contained"
                // onPress={showModal}
                ></Button>
                < Button icon="arrow-down-thick"
                    color="#03cfb7"
                    mode="contained"
                // onPress={showModal}
                ></Button>
            </View>
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