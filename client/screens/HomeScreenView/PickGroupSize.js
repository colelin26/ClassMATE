import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View
} from "react-native";

import { Button, Card, Title, Paragraph } from "react-native-paper";
import GroupSizeSelect from "../../components/GroupSizeSelect";

export default class PickGroupSize extends React.Component {
  static navigationOptions = {
    title: "Party Size"
  };

  render() {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.helpLinkText}>
            Select your maximum party size.
          </Text>
          <GroupSizeSelect />
          <Button
            mode="outlined"
            onPress={() => this.props.navigation.navigate("MatchResult")}
            style={styles.button}
          >
            Next
          </Button>
        </View>
        <View style={styles.getStartedContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
    flex: 1,
    backgroundColor: "#fff",
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
    margin: 20
  },
  helpLinkText: {
    fontSize: 20,
    margin: 10,
    color: "#2e78b7"
  }
});
