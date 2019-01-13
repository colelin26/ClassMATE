import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  StyleSheet
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible: false
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = async date => {
    await AsyncStorage.setItem("storedDate", date);
    this.setState({ date });
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this._showDateTimePicker}
          style={styles.container}
        >
          <Text style={styles.date}>
            {(this.state.date &&
              moment(this.state.date).format("dddd, MMMM Do YYYY")) ||
              "Click me to pick a date"}
          </Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row"
  },
  date: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 30,
    color: "#2e78b7",
    margin: 20
  }
});
