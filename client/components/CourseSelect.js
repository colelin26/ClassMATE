import React from "react";
import { Alert, Text, TextInput, StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
// import RNPickerSelect from './debug'

export default class CourseSelect extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
      currentCourse: undefined,
      items: [
        { label: "CS 240", value: "cs240" },
        {
          label: "CS 251",
          value: "cs251"
        },
        {
          label: "CS 241E",
          value: "cs241e"
        }
      ]
    };
  }

  componentDidMount() {
    // if the component is using the optional `value` prop, the parent
    // has the abililty to both set the initial value and also update it
    // setTimeout(() => {
    //   this.setState({
    //     favColor: "red"
    //   });
    // }, 1000);
    // parent can also update the `items` prop
    // setTimeout(() => {
    //   this.setState({
    //     items: this.state.items.concat([{ value: "purple", label: "Purple" }])
    //   });
    // }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <RNPickerSelect
          placeholder={{
            label: "Pick a course...",
            value: null,
            color: "#9EA0A4"
          }}
          items={this.state.items}
          onValueChange={value => {
            this.setState({
              currentCourse: value
            });
          }}
          onUpArrow={() => {
            this.inputRefs.name.focus();
          }}
          onDownArrow={() => {
            this.inputRefs.picker2.togglePicker();
          }}
          style={{ ...pickerSelectStyles }}
          value={this.state.favColor}
          ref={el => {
            this.inputRefs.picker = el;
          }}
        />

        {/* <View style={{ paddingVertical: 5 }} />

        <Text>Company?</Text>
        <TextInput
          ref={el => {
            this.inputRefs.company = el;
          }}
          returnKeyType="go"
          enablesReturnKeyAutomatically
          style={pickerSelectStyles.inputIOS}
          onSubmitEditing={() => {
            Alert.alert("Success", "Form submitted", [
              { text: "Okay", onPress: null }
            ]);
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 10
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  },
  inputAndroid: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  },
  helpLinkText: {
    fontSize: 20,
    margin: 10,
    color: "#2e78b7"
  }
});
