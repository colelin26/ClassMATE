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
import { WebBrowser } from "expo";
import DatePicker from "../../components/DatePicker";
import {
  Button,
  Card,
  Title,
  Paragraph,
  Dialog,
  Portal
} from "react-native-paper";

export default class MatchResult extends React.Component {
  state = {
    visible: false
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "null"
    };
  };

  _data = [{ course: "CS 240" }, { course: "CS 452" }, { course: "CO 271" }];

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (
      <View style={styles.contentContainer}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {this._data.map((data, index) => {
            return (
              <Card key={index}>
                <Card.Content>
                  <Title>{data.course}</Title>
                </Card.Content>
                <Card.Actions>
                  <Button>EDIT</Button>
                  <Button>REMOVE</Button>
                </Card.Actions>
              </Card>
            );
          })}
          <Portal>
            <Dialog visible={this.state.visible} onDismiss={this._hideDialog}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Paragraph>Are you sure you want to delete this?</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={this._hideDialog}>YES</Button>
                <Button onPress={this._hideDialog}>NO</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "flex-start",
    alignContent: "center",
    flexGrow: 1,
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  container: {
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
    marginTop: 20
  }
});
