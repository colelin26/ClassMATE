import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  View,
  ImageBackground
} from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { TextInput, HelperText, withTheme } from "react-native-paper";

const BackGroundPNG = require("../assets/images/background.png");

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Login: {
        username: "",
        password: ""
      }
    };
  }

  static navigationOptions = {
    header: null
  };

  _signInAsync = async (email, password) => {
    // await AsyncStorage.setItem("userEmail", email);
    // await AsyncStorage.setItem("userPassword", password);
    this.props.navigation.navigate("Main");
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
                    ? require("../assets/images/robot-dev.png")
                    : require("../assets/images/robot-prod.png")
                }
                style={styles.welcomeImage}
              />
            </View>
            <KeyboardAvoidingView
              style={styles.wrapper}
              behavior="padding"
              keyboardVerticalOffset={80}
            >
              <Text style={styles.getStartedText}>
                Get started by login or sign up
              </Text>
              <TextInput
                mode="outlined"
                style={styles.inputContainerStyle}
                label="UWaterloo Email"
                onChangeText={text =>
                  this.setState({
                    Login: {
                      username: text
                    }
                  })
                }
              />
              <TextInput
                mode="outlined"
                style={styles.inputContainerStyle}
                label="Password"
                secureTextEntry={true}
                onChangeText={text =>
                  this.setState({
                    Login: {
                      password: text
                    }
                  })
                }
              />
            </KeyboardAvoidingView>
            <View style={styles.getStartedContainer}>
              <Button
                mode="outlined"
                onPress={() => {
                  this._signInAsync(
                    this.state.Login.username,
                    this.state.Login.password
                  );
                }}
                style={styles.button}
              >
                Login
              </Button>
              <Button mode="outlined" onPress={() => {}} style={styles.button}>
                Sign Up
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
  inputContainerStyle: {
    margin: 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
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
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  button: {
    width: "50%",
    margin: 8
  }
});
