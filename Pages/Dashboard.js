import { Button, Card, IconButton ,Modal,Portal,Provider} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Image,
    ScrollView,
    Dimensions,
    Platform,
    SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Datatable from '../Components/Datatable';
import MapView from 'react-native-maps'
import Navbar from "../Components/Navbar";
import OpenClose from "../Components/OpenClose";

import BackgroundAnimation from "../Components/BackgroundAnimation";



const Stack = createNativeStackNavigator();
export default function Dashboard() {
    
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
   
    var width = Dimensions.get('window').width;
    
    var height = Dimensions.get('window').height;
    const containerStyle = {backgroundColor:"white", width:width,height:height/2,textAlign:"center",borderRadius:20,marginVertical:30};
    const navigation = useNavigation();

    const RedirectToOrder = () => {
        navigation.navigate("Order");
    };
    const RedirectToliveOrder = () => {
        navigation.navigate("liveOrder");
    };
    const RedirectToItems = () => {
        navigation.navigate("items");
    };
    const RedirectToCustomer = () => {
        navigation.navigate("Customer");
    };
    const RedirectToResturant = () => {
        navigation.navigate("Resturant");
    };
    const RedirectToMode = () => {
        navigation.navigate("OpenClose");
    };
    return (
        <Provider>
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <Navbar />
            <ScrollView>
            
                {/* <AnimetedImage
                    resizeMode="repeat"
                    style={[styles.background, {
                        transform: [
                            {
                                translateX: translateAnimation,
                            },
                            {
                                translateY: translateAnimation,
                            },
                        ],
                    }]}
                    source={backgroundImage} /> */}
                <BackgroundAnimation />



                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                    <View style={{ margin: 20 }}>
                        <Text style={{
                            fontSize: 40
                        }}>DASHBOARD</Text>
                    </View>
                    {/* Admin panel resturant open */}
        
                    <Card style={styles.resturantCard}>
                        <View style={styles.resturantMainView}>
                            <View>
                            <IconButton icon="close" style={styles.closeIcon} />
                        </View>
                            <View >
                                <Text style={styles.resturantText}>Resturant is Closed!</Text>
                            </View>
                            <View>
                            
                            {/* onPress={()=>{console.log("xtjn")}} */}
                           
                            <IconButton icon="pen" style={styles.penIcon} onPress={showModal}/>
                            <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
       <OpenClose />
        </Modal>
      </Portal>
      
      {/* <Button style={{marginTop: 30}} >
        Show
      </Button> */}
                           
                        </View>
                        </View>
                    </Card>

                    {/* Cards of sales volume etc */}
                    <ScrollView horizontal={true}  >
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginTop: 40
                        }}>
                            <Card style={{
                                borderRadius: 20,
                                height: "75%",
                                width: width / 2,
                                margin: 20,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}
                                onPress={() => { RedirectToOrder() }}
                            >
                                <View style={styles.scrollCardView}>
                                    {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                    <Text style={styles.salevolumeText}>Sales Volume</Text>
                                    <Text style={{ fontSize: 30, color: "red" }}>$85.55</Text>
                                    <Text>(days)</Text>
                                </View>
                            </Card>

                            <Card style={{
                                borderRadius: 20,
                                height: "75%",
                                width: width / 2,
                                margin: 20,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}
                                onPress={() => { RedirectToliveOrder() }}
                            >
                                <View style={styles.scrollCardView}>
                                    {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                    <Text style={styles.salevolumeText}>Orders</Text>
                                    <Text style={{ fontSize: 30, color: "#000092" }}>749</Text>
                                    <Text>Today</Text>
                                </View>
                            </Card>

                            <Card style={{
                                borderRadius: 20,
                                height: "75%",
                                width: width / 2,
                                margin: 20,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}
                                onPress={() => { RedirectToResturant() }}
                            >
                                <View style={styles.scrollCardView}>
                                    {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                    <Text style={styles.salevolumeText}>Resturants</Text>
                                    <Text style={{ fontSize: 30, color: "#000092" }}>34</Text>
                                    <Text>resturants</Text>
                                </View>
                            </Card>

                            <Card style={{
                                borderRadius: 20,
                                height: "75%",
                                width: width / 2,
                                margin: 20,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}
                                onPress={() => { RedirectToItems() }}
                            >
                                <View style={styles.scrollCardView}>
                                    {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                    <Text style={styles.salevolumeText}>No of items</Text>
                                    <Text style={{ fontSize: 30, color: "#000092" }}>210</Text>
                                    <Text>items</Text>
                                </View>
                            </Card>

                            <Card style={{
                                borderRadius: 20,
                                height: "75%",
                                width: width / 2,
                                margin: 20,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}
                                onPress={() => { RedirectToCustomer() }}
                            >
                                <View style={styles.scrollCardView}>
                                    {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                    <Text style={styles.viewsText}>Views</Text>
                                    <Text style={{ fontSize: 30, color: "green" }}>53460</Text>
                                    <Text>views (All)</Text>
                                </View>
                            </Card>

                            <Card style={{
                                borderRadius: 20,
                                height: "75%",
                                width: width / 2,
                                margin: 20,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}
                                onPress={() => { RedirectToCustomer() }}
                            >
                                <View style={styles.scrollCardView}>
                                    {/* <IconButton icon="close" style={styles.closeIcon} /> */}
                                    <Text style={styles.salevolumeText}>Customers</Text>
                                    <Text style={{ fontSize: 30, color: "green" }}>1</Text>
                                    <Text>customers</Text>
                                </View>
                            </Card>
                        </View>
                    </ScrollView>

                    {/* Datatable card */}
                    <Card style={{
                        borderRadius: 20,
                        margin: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }} >
                        <Text style={{ margin: 15, fontSize: 20 }}>
                            Live Resturants
                        </Text>
                        <Card style={{
                            marginTop: 20,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}>

                            <Datatable />
                        </Card>
                    </Card>

                    <Card style={{
                        borderRadius: 20,
                        margin: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,

                    }} >
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Text>Realtime Map</Text>
                            <Text>Delivery Activities</Text>
                        </View>
                        <Card style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,

                        }}>
                            {/* <MapView
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            /> */}
                        </Card>
                    </Card>


                </View >
                
            </ScrollView>

        </SafeAreaView >
        </Provider>
    );
}

const styles = StyleSheet.create({
    resturantCard: {
        
        marginLeft: 20,
        marginRight: 20,
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
    resturantMainView: {
        paddingBottom: "20%",
        paddingTop: "20%",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",

    },
    closeIcon: {
        borderWidth: 1,
        borderColor: "Black",
        borderRadius: 50,
        backgroundColor: "red"
    },
    penIcon: {
        borderWidth: 1,
        borderColor: "Black",
        borderRadius: 50,
    },
    resturantText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    salevolumeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue"
    },
    viewsText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    contentContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40
    },
    scrollCardView: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 20,
        padding: 15
    }


});