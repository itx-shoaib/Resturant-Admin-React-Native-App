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
import RNPickerSelect from 'react-native-picker-select';

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
        />
    );
}

export default function BulkSms() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);



    const [value, onChangeText] = React.useState('Type your message here');

    const RedirectToPage = () => {
        navigation.navigate("Drawer");
    }
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <Navbar />
            <ScrollView>
                <View style={{ margin: 20 }} >
                    <Text style={{
                        fontSize: 30
                    }}>BULK SMS</Text>
                </View>
                <Card style={styles.resturantCard}>
                    <View style={{ margin: 7, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>

                        <Text style={{
                            fontSize: 15
                        }}>BULK SMS</Text>

                        < Button icon="arrow-left"
                            color="blue"
                            mode="contained"
                            onPress={() => RedirectToPage()}
                        >back </Button>
                    </View>
                    <Card style={styles.orderInnerCard}>
                        <Text style={styles.labelText}>Select All:</Text>
                        <View style={{ margin: 10 }}>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>

                        <Text style={styles.labelText}>Select Customers:</Text>
                        <View style={styles.Textfields}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'John', value: 'John' },
                                    { label: 'Jessica', value: 'Jessica' },
                                ]}
                            />
                        </View>
                        <View style={styles.Textfields}>
                            <UselessTextInput
                                multiline
                                numberOfLines={10}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                                style={{ padding: 20 }}
                            />
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