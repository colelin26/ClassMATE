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
import { Avatar } from "react-native-elements";
import DatePicker from "../../components/DatePicker";
import {
  Button,
  Card,
  Title,
  Paragraph,
  Dialog,
  Portal,
  Divider
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

  _data = {
    name: "Tony Liang",
    program: "Computer Science",
    year: "2nd",
    courses: [
      { course: "CS 240" },
      { course: "FINE 130" },
      { course: "PD 11" },
      { course: "CO 271" },
      { course: "MATH 247" }
    ],
    group: [
      { member: "Ben, Tony", course: "FINE 130" },
      { member: "Tony, Alice", course: "PD 11" }
    ]
  };

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.statusBar} />
        <View style={styles.avatarCenter}>
          <Avatar
            xlarge
            rounded
            source={{ url: "https://placeimg.com/640/640/animals" }}
            activeOpacity={0.7}
          />
        </View>
        <View style={styles.navBar}>
          <Text style={styles.nameHeader}>{this._data.name}</Text>
          <Text style={styles.programHeader}>{this._data.program}</Text>
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Divider />
          <View style={styles.subNavBar}>
            <Text style={styles.dividerHeader}>Courses</Text>
          </View>
          {this._data.courses.map((data, index) => {
            return (
              <Card key={index}>
                <Card.Content>
                  <Title>{data.course}</Title>
                </Card.Content>
                <Card.Actions>
                  <Button>INFO</Button>
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
          <View style={styles.subNavBar}>
            <Text style={styles.dividerHeader}>Group</Text>
          </View>
          {this._data.group.map((data, index) => {
            return (
              <Card key={index}>
                <Card.Content>
                  <Title>{data.member}</Title>
                  <Paragraph>{data.course}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                <Card.Actions>
                  <Button>CHAT</Button>
                  <Button>EDIT</Button>
                  <Button onPress={this._showDialog}>INFO</Button>
                  <Button onPress={this._showDialog}>QUIT</Button>
                </Card.Actions>
              </Card>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 10
  },
  nameHeader: {
    fontSize: 30,
    textAlign: "center"
  },
  programHeader: {
    fontSize: 13,
    textAlign: "center",
    color: "#2e78b7"
  },
  dividerHeader: {
    fontSize: 12,
    textAlign: "center",
    padding: 10
  },
  avatarCenter: {
    alignItems: "center"
  },
  navBar: {
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    margin: "auto"
  },
  subNavBar: {
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    margin: "auto"
  },
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
