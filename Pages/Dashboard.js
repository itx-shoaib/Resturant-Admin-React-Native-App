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


export default function Dashboard() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();

    const RedirectToHome = () => {
        navigation.navigate("Home");
    };
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View>
                <Text>Dashboard</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    socialbuttonfb: {
        borderRadius: 20,
        backgroundColor: "#4267B2",
        marginBottom: 20,
    },
    socialbuttontw: {
        borderRadius: 20,
        backgroundColor: "#1DA1F2",
        marginBottom: 20,
    },
    Textfields: {
        borderRadius: 20,
        borderColor: "grey",
        padding: 10,
        marginBottom: 20,
    },
});