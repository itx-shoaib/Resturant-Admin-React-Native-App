import { Button } from "react-native-paper";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

const radioButtonsData = [
  {
    id: "1", // acts as primary key, should be unique and non-empty string
    label: "Uppercase",
    value: "option1",
  },
  {
    id: "2",
    label: "Lowercase",
    value: "option2",
  },
  {
    id: "3",
    label: "Capitalised",
    value: "option3",
  },
];

export default function MenuType() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
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
            MENU TYPE
          </Text>
          <ScrollView horizontal={true}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="row"
              containerStyle={{ marginTop: 40, marginBottom: 40, padding: 20 }}
            />
          </ScrollView>
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
