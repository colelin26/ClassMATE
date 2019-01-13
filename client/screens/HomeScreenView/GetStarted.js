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
import { Button, Card, Title, Paragraph } from "react-native-paper";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

const BackGroundPNG = require("../../assets/images/background3.png");

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BackGroundPNG}
          style={{ width: "100%", height: "100%" }}
        >
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require("../../assets/images/robot-dev.png")
                    : require("../../assets/images/robot-prod.png")
                }
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.getStartedContainer}>
              <Button
                mode="outlined"
                onPress={() => this.props.navigation.navigate("SelectCourse")}
                style={styles.button}
              >
                I want to find a buddy!
              </Button>
            </View>
            <View style={styles.getStartedContainer} />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  contentContainer: {
    paddingTop: 100,
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1
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
    alignItems: "center",
    marginHorizontal: 50
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  button: {
    width: "80%",
    margin: 8
  }
});
