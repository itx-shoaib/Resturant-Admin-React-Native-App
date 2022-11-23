import { Button, Card, IconButton } from "react-native-paper";
import React, { useEffect, useRef } from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Datatable from "../Components/Datatable";
import MapView from "react-native-maps";
import Navbar from "../Components/Navbar";
// import BackgroundAnimation from "../Components/BackgroundAnimation";

export default function RestaurantManagement() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
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
            APPS
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
              borderBottomWidth: 1,
              borderColor: "black",
              paddingBottom: 20,
            }}
          >
            Impressum
          </Text>
          <Text style={styles.Headings}>Title of Impressum:</Text>
          <TextInput
            placeholder="Impressum"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Impressum:</Text>
          <TextInput placeholder="" style={styles.Textfields}></TextInput>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
              borderBottomWidth: 1,
              borderColor: "black",
              paddingBottom: 20,
            }}
          >
            Print Node
          </Text>
          <Text style={styles.Headings}>Print Node API Key:</Text>
          <TextInput
            placeholder="Enter printnode.com api key"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Main Thermal Printer ID:</Text>
          <TextInput
            placeholder="Enter printnode printer ID"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Kitchen Thermal Printer ID:</Text>
          <TextInput
            placeholder="Enter printnode printer ID"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Standard Printer ID:</Text>
          <TextInput
            placeholder="Enter printnode printer ID"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Print A4 Standard order when:</Text>
          <TextInput
            placeholder="Form Select Will Come Here"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>
            Print on main thermal printer when:
          </Text>
          <TextInput
            placeholder="Form Select Will Come Here"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>
            Print on kitchen thermal printer when:
          </Text>
          <TextInput
            placeholder="Form Select Will Come Here"
            style={styles.Textfields}
          ></TextInput>
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
