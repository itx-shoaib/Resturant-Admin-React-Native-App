import { Button, Card } from "react-native-paper";
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
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


export default function AddCoupon() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [datePicker, setDatePicker] = useState(false);
    const [datePicker2, setDatePicker2] = useState(false);
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [valuefromdate, setvaluefromdate] = useState()
    const [valueenddate, setvalueenddate] = useState()

    function showDatePicker() {
        setDatePicker(true);
    };

    function showDatePicker2() {
        setDatePicker(true);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setvaluefromdate(moment(date).format("MMM Do YY"))
        setDatePicker(false);
    };
    function onDateSelected2(event, value) {
        setDate2(value);
        setvalueenddate(moment(date).format("MMM Do YY"))
        setDatePicker2(false);
    };
    const navigation = useNavigation();

    const RedirectToResturant = () => {
        navigation.navigate("Discount");
    }
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <Navbar />
            <ScrollView>
                <View style={{ margin: 20 }} >
                    <Text style={{
                        fontSize: 25
                    }}>COUPON</Text>
                </View>
                <Card style={styles.resturantCard}>
                    <View style={{ margin: 7, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>

                        <Text style={{
                            fontSize: 15
                        }}>NEW COUPON</Text>

                        < Button icon="arrow-left"
                            color="blue"
                            mode="contained"
                            onPress={() => RedirectToResturant()}
                        >back</Button>
                    </View>
                    <Card style={styles.orderInnerCard}>
                        <Text style={styles.labelText}>Name:</Text>
                        <TextInput
                            placeholder="enter code name"
                            style={styles.Textfields}
                        ></TextInput>
                        {/* <Text style={{ fontWeight: "bold", fontSize: 15, margin: 15 }} >Owner Information</Text> */}
                        <Text style={styles.labelText}>Type:</Text>
                        {/* <TextInput
                            placeholder="Owner Name Here..."
                            style={styles.Textfields}
                        ></TextInput> */}
                        <View style={styles.Textfields}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Fixed', value: 'Fixed' },
                                    { label: 'Percentage', value: 'Percentage' },
                                ]}
                            />
                        </View>
                        <Text style={styles.labelText}>Price:</Text>
                        <TextInput
                            placeholder="Enter Price Here..."
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={{ fontWeight: "bold", marginLeft: 15 }}>Price in GBP</Text>
                        <Text style={styles.labelText}>Price:</Text>
                        <TextInput
                            placeholder="Enter Percentage Here..."
                            style={styles.Textfields}
                        ></TextInput>
                        <Text style={{ fontWeight: "bold", marginLeft: 15 }}>Percentage value</Text>
                        <Text style={styles.labelText}>Active from:</Text>
                        <TextInput
                            placeholder="Active from"
                            style={styles.Textfields}
                            value={valueenddate} showSoftInputOnFocus={false} onFocus={showDatePicker2}
                        ></TextInput>
                        {datePicker && (
                            <DateTimePicker
                                value={date}
                                mode={'date'}
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                is24Hour={true}
                                onChange={onDateSelected}
                                style={styles.datePicker}
                            />
                        )}
                        <Text style={styles.labelText}>Active to:</Text>
                        <TextInput
                            placeholder="Active to"
                            style={styles.Textfields}
                            value={valueenddate} showSoftInputOnFocus={false} onFocus={showDatePicker2}
                        ></TextInput>
                        {datePicker && (
                            <DateTimePicker
                                value={date}
                                mode={'date'}
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                is24Hour={true}
                                onChange={onDateSelected}
                                style={styles.datePicker}
                            />
                        )}
                        <Text style={styles.labelText}>Unit number:</Text>
                        <TextInput
                            placeholder="Unit number to use"
                            style={styles.Textfields}
                        ></TextInput>
                        <View style={{ alignItems: "flex-end", margin: 20 }}>
                            <Button mode="contained" onPress={() => RedirectToResturant()}>Save</Button>
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
    },
    MainContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    text: {
        fontSize: 25,
        color: 'red',
        padding: 3,
        marginBottom: 10,
        textAlign: 'center'
    },

    // Style for iOS ONLY...
    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },
});