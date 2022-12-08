import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Timings() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  const [datePicker, setDatePicker2] = useState(false);
  const [date, setDate] = useState(new Date());

  function showDatePicker2() {
    setDatePicker2(true);
  }

  function onDateSelected(event, value) {
    setDatePicker2(false);

    setDate(value);
    setvaluefromdate(moment(date).format("MMM Do YY"));
  }
  return (
    <SafeAreaView>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            marginBottom: 50,
            width: width,
          }}
        >
          <Text style={styles.Headings}>Pickup Timings:</Text>
          <TextInput
            placeholder="Select Time"
            //value={valueenddate}
            showSoftInputOnFocus={false}
            onFocus={showDatePicker2}
            style={styles.TimeInput}
          ></TextInput>
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={"time"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={false}
              onChange={onDateSelected}
            />
          )}
          <TextInput
            placeholder="Select Time"
            //value={valueenddate}
            showSoftInputOnFocus={false}
            onFocus={showDatePicker2}
            style={styles.TimeInput}
          ></TextInput>
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={"time"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={false}
              onChange={onDateSelected}
            />
          )}
          <Text style={styles.Headings}>Delivery Timings:</Text>
          <TextInput
            placeholder="Select Time"
            //value={valueenddate}
            showSoftInputOnFocus={false}
            onFocus={showDatePicker2}
            style={styles.TimeInput}
          ></TextInput>
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={"time"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={false}
              onChange={onDateSelected}
            />
          )}
          <TextInput
            placeholder="Select Time"
            //value={valueenddate}
            showSoftInputOnFocus={false}
            onFocus={showDatePicker2}
            style={styles.TimeInput}
          ></TextInput>
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={"time"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={false}
              onChange={onDateSelected}
            />
          )}
          <Text style={styles.Headings}>Restaurant Timings:</Text>
          <TextInput
            placeholder="Select Time"
            //value={valueenddate}
            showSoftInputOnFocus={false}
            onFocus={showDatePicker2}
            style={styles.TimeInput}
          ></TextInput>
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={"time"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={false}
              onChange={onDateSelected}
            />
          )}
          <TextInput
            placeholder="Select Time"
            //value={valueenddate}
            showSoftInputOnFocus={false}
            onFocus={showDatePicker2}
            style={styles.TimeInput}
          ></TextInput>
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={"time"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={false}
              onChange={onDateSelected}
            />
          )}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Textfields: {
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: 300,
  },
  Headings: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 14,
    padding: 10,
  },
  TimeInput: { 
    margin: 10, 
    borderColor: "black", 
    borderWidth: 1, 
    borderRadius:20, 
    width: 120, 
    height: 40, 
    textAlign: "center"
  }
});
