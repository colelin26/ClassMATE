import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  ImageBackground
} from "react-native";
import { WebBrowser } from "expo";
import DatePicker from "../../components/DatePicker";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const BackGroundPNG = require("../../assets/images/background2.png");

export default class PickDate extends React.Component {
  static navigationOptions = {
    title: "Pick the Date"
  };

  render() {
    return (
      <ImageBackground
        source={BackGroundPNG}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.contentContainer}>
          <DatePicker />
          <View style={styles.getStartedContainer}>
            <Button
              mode="outlined"
              onPress={() => this.props.navigation.navigate("PickGroupSize")}
              style={styles.button}
            >
              Next
            </Button>
          </View>
          <View style={styles.getStartedContainer} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
    flex: 1,

    flexDirection: "column"
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center"
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  button: {
    width: "30%",
    marginTop: 20
  }
});
