import * as React from 'react';
import { Button, Card, Switch, Modal, Portal, Provider } from "react-native-paper";
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
    const [visible, setVisible] = React.useState(false);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, zIndex: 3 };

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View style={{ margin: 20, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                < Button icon="plus"
                    color="#5BB8EE"
                    mode="contained"
                    onPress={showModal}
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

            {/* Modal */}
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Card style={styles.resturantCard}>
                            <View style={{ margin: 7, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>

                                <Text style={{
                                    fontSize: 20, fontWeight: "bold"
                                }}>NEW CATEGORY</Text>

                                {/* < Button icon="arrow-left"
                                    color="blue"
                                    mode="contained"
                                    onPress={() => RedirectToPage()}
                                >back to ranks</Button> */}
                            </View>
                            <Card style={styles.orderInnerCard}>
                                <TextInput
                                    placeholder="Category name"
                                    style={styles.Textfields}
                                ></TextInput>

                                <View style={{ margin: 10 }}>
                                    <Text style={styles.labelText}>Discountable</Text>
                                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{ margin: 5 }} />
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", margin: 20 }}>
                                    <Button mode="contained" color="silver" onPress={hideModal} style={{ margin: 2 }}>Close</Button>
                                    <Button mode="contained" onPress={hideModal} style={{ margin: 2 }}>Save</Button>
                                </View>
                            </Card>

                        </Card>
                    </Modal>
                </Portal>
            </Provider>
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