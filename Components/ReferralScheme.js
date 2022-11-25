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
import { Button } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";

export default function ReferralScheme() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  const [isSelected, setSelection] = useState(false);
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
            REFERRAL SCHEME
          </Text>
          {/* <CheckBox value={isSelected} onValueChange={setSelection} /> */}
          <Text style={styles.Headings}>Referee (New Customer):</Text>
          <TextInput
            placeholder="i.e 5 points for $1 spending"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Referrer (Existing Customer):</Text>
          <TextInput
            placeholder="i.e give $1 for every 10 points"
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
