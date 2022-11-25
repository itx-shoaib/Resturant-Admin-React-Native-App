import { Button } from "react-native-paper";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TextInput
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function WorkingHours() {
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
      <ScrollView>
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
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            WORKING HOURS
          </Text>
          <TextInput
              placeholder="Select Time"
            //value={valueenddate}
              showSoftInputOnFocus={false}
              onFocus={showDatePicker2}
              style={{margin: 30}}
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
          <Button
            style={{
              borderColor: "blue",
              borderRadius: 25,
              borderWidth: 3,
              padding: 10,
              width: 0.4 * width,
              alignSelf: "center",
            }}
          >
            Save
          </Button>
        </View>
      </ScrollView>
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
    marginTop: 40,
    fontSize: 14,
    padding: 10,
  },
});
