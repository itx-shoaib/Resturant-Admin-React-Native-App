import { Button } from "react-native-paper";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import MapView from "react-native-maps";

export default function DeliveryArea() {
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
            DELIVERY AREA
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            TAKEAWAY LOCATION
          </Text>
          {/* <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          /> */}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            DELIVERY ZONE
          </Text>
          {/* <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          /> */}
          <Text style={styles.Headings}>Excluded Postal Codes:</Text>
          <TextInput
            placeholder="add coma seperated codes"
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
          <Button
            style={{
              borderColor: "blue",
              borderRadius: 25,
              borderWidth: 3,
              padding: 10,
              width: 0.4 * width,
              alignSelf: "center",
              marginTop: 40,
            }}
          >
            zone1
          </Button>
          <Button
            style={{
              borderColor: "blue",
              borderRadius: 25,
              borderWidth: 3,
              padding: 10,
              width: 0.4 * width,
              alignSelf: "center",
              marginTop: 50,
            }}
          >
            Add Another zone
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
