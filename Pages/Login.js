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
    SafeAreaView,
    AsyncStorage
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react"


export default function Clientlogin() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();

    async function Login() {
        const user = {
            email,
            password,
        }

        console.log(user)
        try {
            // setloading(true)
            const result = (await axios.post('https://192.168.43.49:5000/api/user/login', user)).data;
            console.log("In the login")
            AsyncStorage.setItem('currentuser', JSON.stringify(result.data));

            if (result.data[0].customer_Id != null) {

                AsyncStorage.setItem('status', 'true');
            }
            else {


                AsyncStorage.setItem('status', 'false');
            }
            // setloading(false)
            navigation.navigate("Dashboard");
            setemail('');
            setpassword('');

        }
        catch (error) {
            console.log(error);

            // setloading(false)
        }

    }

    const RedirectToDashboard = () => {
        navigation.navigate("Dashboard");
    };
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <ImageBackground
                source={{
                    uri: "https://goldenfrysedgley.co.uk/admin2/img/photos/bg1.webp"
                }}
                style={{ height: height, width: width }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: height,
                    }}
                >
                    <Card style={{ padding: 40, borderRadius: 20, width: width / 1.12, height: height / 1.42 }}>
                        <ScrollView>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    style={{ height: 100, width: 100, marginBottom: 20 }}
                                    source={{ uri: 'https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg' }}
                                />
                            </View>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginBottom: 20,
                                    fontSize: 20,
                                }}
                            >
                                WELCOME BACK
                            </Text>
                            <View>
                                <TextInput
                                    placeholder="Email"
                                    style={styles.Textfields}
                                    value={email}
                                    onChangeText={(e) => setemail(e)}
                                ></TextInput>
                                <TextInput
                                    placeholder="Password"
                                    style={styles.Textfields}
                                    value={password}
                                    onChangeText={(e) => setpassword(e)}
                                ></TextInput>

                                <Button
                                    style={{ marginBottom: 20, backgroundColor: "#f87c28" }}
                                    mode="contained"
                                    onPress={() => RedirectToDashboard()}
                                >
                                    Login
                                </Button>
                            </View>
                        </ScrollView>
                    </Card>
                </View>
            </ImageBackground>
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