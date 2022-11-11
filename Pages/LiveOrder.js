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
    Platform,
    SafeAreaView,
    useWindowDimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TabView, SceneMap } from 'react-native-tab-view';
import Navbar from "../Components/Navbar";
import New from "../Components/New"
import Accepted from '../Components/Accepted';

const FirstRoute = () => (
    <New />
);

const SecondRoute = () => (
    <Accepted />
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
});

export default function LiveOrder() {
    const navigation = useNavigation();

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const RedirectToPage = () => {
        navigation.navigate("Rank");
    }
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'New' },
        { key: 'second', title: 'Accepted' },
        { key: 'third', title: 'Completed' },
    ]);
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <Navbar />
            <View style={{ width: layout.width, height: layout.height }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
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