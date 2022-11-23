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
import RadioButtonRN from "radio-buttons-react-native";
import { useNavigation } from "@react-navigation/native";
import Datatable from "../Components/Datatable";
import MapView from "react-native-maps";
import Navbar from "../Components/Navbar";
// import BackgroundAnimation from "../Components/BackgroundAnimation";

const data = [
  {
    label: "Uppercase",
  },
  {
    label: "Lowercase",
  },
  {
    label: "Capitalised",
  },
];
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
            MENU TYPE
          </Text>
          <RadioButtonRN box={false} data={data} style={{ margin: 20 }} />
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
