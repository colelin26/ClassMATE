import React from "react";
import Chat from "../components/Chat";
import {
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  StyleSheet,
  ImageBackground
} from "react-native";

const BackGroundPNG = require("../assets/images/background3.png");

export default class ChattingScreen extends React.Component {
  static navigationOptions = {
    title: "Chat"
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BackGroundPNG}
          style={{ width: "100%", height: "100%" }}
        >
          {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
          <Chat />
        </ImageBackground>
      </View>
    );
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
