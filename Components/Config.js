import { Button } from "react-native-paper";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";

export default function Config() {
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
            CONFIGURATION
          </Text>
          <Text style={styles.Headings}>Per Order Time (in mins):</Text>
          <TextInput placeholder="30" style={styles.Textfields}></TextInput>
          <Text style={styles.Headings}>Customer OTP Verification:</Text>
          <TextInput placeholder="No" style={styles.Textfields}></TextInput>
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
