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

import { Dropdown } from 'react-native-element-dropdown';
const data = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' }
];


export default function Content() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  const [value, setValue] = useState("1");

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
            CONTENT
          </Text>
          <Text>Timings</Text>
        {/* <TextInput
          style={styles.inputStyle}
          autoCapitalize="false"
          autoCorrect={false}
          onChangeText={(n)=>{
            setPhone(n)}}
          placeholder=""
        ></TextInput> */}
          <TextInput placeholder="" style={styles.Textfields}></TextInput>
        {/* <Text
             style={{
              borderColor: "blue",
              borderRadius: 25,
              borderWidth: 3,
              padding: 10,
              width: 0.4 * width,
              alignSelf: "center",
            }}
            onChangeText={(n)=>{
              setSub(n)
            }}
          >
            SAVE
          </Text> */}
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
          <Text>Front end template</Text>
          <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="1"
        // searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        
      />
          <Text>Box 3 link</Text>
          {/* <TextInput
          style={styles.inputStyle}
          autoCapitalize="false"
          autoCorrect={false}
          onChangeText={(n)=>{
            setPhone(n)}}
          placeholder="Box 3 link"
        ></TextInput> */}
        <TextInput placeholder="Box 3 link" style={styles.Textfields}></TextInput>
    </View>
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
  Textfields: {
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: 300,
  },
  container: {
    display: "flex",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btn:{
    borderColor: "white",
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    borderRadius: 6,
    padding: 10,
    marginVertical: 10
  },

  levelText: {
    marginTop: 50,
    textAlign: "center",
  },
  blue: {
    fontSize: 20,
    color: "purple",
  },
  // inputStyle: {
  //   borderColor: "black",
  //   borderWidth: 3,
  //   borderTopLeftRadius: 5,
  //   borderTopRightRadius: 3
  // },
  container: {
    display: "flex",
   
    alignItems: "center",
    justifyContent: "center",
  },
  btn:{
    borderColor: "white",
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    borderRadius: 6,
    padding: 10,
    marginVertical: 10
  },

  levelText: {
    marginTop: 50,
    textAlign: "center",
  },
  blue: {
    fontSize: 20,
    color: "purple",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 3,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 2,

    padding: 10,
    marginVertical: 10,
  },
  dropdown: {
    margin: 16,
    height: 50,
    width:80,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
