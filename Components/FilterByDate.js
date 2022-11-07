import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Card, Button } from "react-native-paper"
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

export default function FilterByDate() {
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


    return (
        <>
            <View style={{
                margin: 20,
            }}>
                <Card syle={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <TextInput placeholder="From Date" style={{ height: 50, marginLeft: 15 }} value={valuefromdate} showSoftInputOnFocus={false} onFocus={showDatePicker} />
                        <Text style={{ margin: 18 }}>To </Text>
                        <TextInput style={{ height: 50, marginRight: 15 }} placeholder="From Date" value={valueenddate} showSoftInputOnFocus={false} onFocus={showDatePicker2} />
                    </View>
                </Card>

                <Card style={{ margin: 20 }}>
                    <Button mode="contained" color="#f87c28">Export</Button>
                </Card>
            </View>

            {datePicker && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelected}
                    style={styleSheet.datePicker}
                />
            )}
            {datePicker2 && (
                <DateTimePicker
                    value={date2}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelected2}
                    style={styleSheet.datePicker}
                />
            )}
        </>
    )
}

const styleSheet = StyleSheet.create({

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