import * as React from 'react';
import { Button, Card, List, Modal, Portal, Provider, Switch } from "react-native-paper";
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
import Item from '../Components/Item';
import MenuIcon from '../Components/MenuIcon';


export default function Menu() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [expanded, setExpanded] = React.useState(false);
    const handlePress = () => setExpanded(!expanded);
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
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
                    }}>RESTURANT MENU MANAGEMENT</Text>
                </View>
                <Card style={styles.resturantCard}>
                    <View style={{ margin: 7, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>

                        <Text style={{
                            fontSize: 15
                        }}>MENU</Text>

                        < Button icon="plus"
                            color="blue"
                            mode="contained"
                            onPress={showModal}
                        >CATEGORY</Button>
                    </View>
                    <Card style={styles.orderInnerCard}>
                        <List.Section >
                            <List.Accordion
                                style={{ backgroundColor: '#fbfefa' }}
                                title="Drink"
                                expanded={expanded}
                                onPress={handlePress}>
                                {/* // right={() => <Button icon="plus" onPress={showModal}>Good</Button>}> */}
                                {/* // left={props => <List.Icon {...props} icon="share-variant" color="black" />}> */}
                                <MenuIcon />
                                <Item />
                            </List.Accordion>
                        </List.Section>
                    </Card>

                </Card>


            </ScrollView>
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