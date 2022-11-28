import { Button } from "react-native-paper";
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
import CheckBox from "@react-native-community/checkbox";
import Timings from "./Timings";

export default function WorkingHours() {
  const [isSelected, setSelection] = useState(false);
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
          {/* <CheckBox value={isSelected} onValueChange={setSelection} /> */}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Monday:
          </Text>
          <Timings/>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Tuesday:
          </Text>
          <Timings/>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Wednesday:
          </Text>
          <Timings/>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Thursday:
          </Text>
          <Timings/>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Friday:
          </Text>
          <Timings/>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Saturday:
          </Text>
          <Timings/>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Sunday:
          </Text>
          <Timings/>

          <Button
            style={{
              borderColor: "blue",
              borderRadius: 25,
              borderWidth: 3,
              padding: 10,
              width: 0.4 * width,
              alignSelf: "center",
              marginBottom: 30
            }}
          >
            Add New Shift
          </Button>
          
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
    marginTop: 20,
    fontSize: 14,
    padding: 10,
  },
});
