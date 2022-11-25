import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import RadioButtonRN from "radio-buttons-react-native";

const data = [
  {
    label: "Cash on Delivery",
  },
  {
    label: "Pickup",
  },
  {
    label: "Delivery",
  },
];
export default function RestaurantManagement() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  const [language, setLanguage] = useState("");
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
            RESTAURANT MANAGEMENT
          </Text>
          <Text style={styles.Headings}>Restaurant Name:</Text>
          <TextInput
            placeholder="Happy Pizza"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Restaurant Description:</Text>
          <TextInput
            placeholder="yummy, taco, fast food, wrap etc"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Restaurant Address:</Text>
          <TextInput
            placeholder="Lahore, Pakistan"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Restaurant Phone:</Text>
          <TextInput
            placeholder="XXXX-XXXXXXX"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Service Charges:</Text>
          <TextInput placeholder="00.00" style={styles.Textfields}></TextInput>
          <RadioButtonRN box={false} data={data} style={{ margin: 20 }} />
          <Text style={styles.Headings}>Minimum Order:</Text>
          <TextInput placeholder="10" style={styles.Textfields}></TextInput>
          <Text style={styles.Headings}>
            Average Order Prepare Time in Minutes:
          </Text>
          <Text>
            {language
              ? `My favourite language is ${language}`
              : "Please select a language"}
          </Text>
          <TextInput
            placeholder="Form Select Will Come Here"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Time Slots Seperated in Minutes:</Text>
          <TextInput
            placeholder="Form Select Will Come Here"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Restaurant Image:</Text>
          <Text style={styles.Headings}>Restaurant Cover Image:</Text>
          <Text style={styles.Headings}>Restaurant Receipt Image:</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
              borderTopWidth: 1,
              borderColor: "black",
              paddingTop: 20,
            }}
          >
            Owner Information
          </Text>
          <Text style={styles.Headings}>Owner Name:</Text>
          <TextInput placeholder="Owner" style={styles.Textfields}></TextInput>
          <Text style={styles.Headings}>Owner Email:</Text>
          <TextInput
            placeholder="owner@gmail.com"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Owner Phone:</Text>
          <TextInput
            placeholder="XXXX-XXXXXXX"
            style={styles.Textfields}
          ></TextInput>
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
