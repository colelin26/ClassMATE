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

import { Button, Card, Title, Paragraph, Snackbar } from "react-native-paper";
import GroupSizeSelect from "../../components/GroupSizeSelect";

const BackGroundPNG = require("../../assets/images/background1.png");

export default class PickGroupSize extends React.Component {
  state = {
    visible: false
  };
  static navigationOptions = {
    title: "Party Size"
  };

  render() {
    const { visible } = this.state;
    return (
      <ImageBackground
        source={BackGroundPNG}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.helpLinkText}>
              Select your maximum party size.
            </Text>
            <GroupSizeSelect />
            <Button
              mode="outlined"
              onPress={() => {
                this.setState(state => ({ visible: !state.visible }));
                setTimeout(() => {
                  this.props.navigation.navigate("MatchResult");
                }, 500);
              }}
              style={styles.button}
            >
              Find Your match
            </Button>
          </View>
          <View style={styles.getStartedContainer} />
          <Snackbar
            visible={this.state.visible}
            onDismiss={() => this.setState({ visible: false })}
          >
            Successfully found matching groups!
          </Snackbar>
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
    width: "60%",
    margin: 20
  },
  helpLinkText: {
    fontSize: 20,
    margin: 10,
    color: "#2e78b7"
  }
});
