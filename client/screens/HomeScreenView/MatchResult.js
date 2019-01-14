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
import { Avatar } from "react-native-elements";
import {
  Button,
  Card,
  Title,
  Paragraph,
  Dialog,
  Portal,
  Snackbar
} from "react-native-paper";
import moment from "moment";

const BackGroundPNG = require("../../assets/images/background1.png");

export default class MatchResult extends React.Component {
  state = {
    visible: false,
    snack: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Matching Result",
      headerRight: (
        <Button
          onPress={() => navigation.navigate("GetStarted")}
          title="+1"
          color="#fff"
        />
      )
    };
  };
  //   title: "Matching Result",
  //   headerRight: (
  //     <Button
  //       onPress={() => this.props.navigation.navigate("GetStarted")}
  //       title="Reset"
  //       color="#fff"
  //     />
  //   )
  // };
  _data = [
    {
      member: ["Cole", "Alex", "William"],
      course: "CS 240",
      date: moment(new Date()).add(1, "days")
    },
    {
      member: ["Deliana", "William", "Lucy"],
      course: "CS 240",
      date: new Date()
    },
    {
      member: ["Julie", "Angela"],
      course: "CS 240",
      date: moment(new Date()).add(2, "days")
    },
    {
      member: ["Jennifer"],
      course: "CS 240",
      date: moment(new Date()).add(5, "days")
    }
  ];

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={BackGroundPNG}
          style={{ width: "100%", height: "100%" }}
        >
          {/* <View style={styles.contentContainer}> */}
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            {this._data.map((data, index) => {
              return (
                <Card key={index}>
                  <Card.Content>
                    <Title>
                      {data.member.map((member, index) => {
                        if (index == data.member.length - 1) return member;
                        else return `${member}, `;
                      })}
                    </Title>
                    <Paragraph>{data.course}</Paragraph>
                    <Paragraph>{moment(data.date).format("MMMM Do")}</Paragraph>
                    <Card.Cover
                      rounded
                      source={{ uri: "https://picsum.photos/700" }}
                    />
                    <View style={styles.avatarStyle}>
                      {data.member.map((member, index) => (
                        <View style={styles.avatar} key={index}>
                          <Avatar
                            medium
                            source={{
                              url: [
                                "https://placeimg.com/640/640/people",
                                "https://placeimg.com/640/640/animals",
                                "https://placeimg.com/640/640/nature",
                                "https://placeimg.com/640/640/tech",
                                "https://placeimg.com/640/640/sepia"
                              ][Math.floor(Math.random() * 5)]
                            }}
                            activeOpacity={0.7}
                            key={index}
                          />
                        </View>
                      ))}
                    </View>
                  </Card.Content>
                  <Card.Actions>
                    <Button
                      onPress={() => {
                        this.setState({ snack: true });
                      }}
                    >
                      JOIN
                    </Button>
                    <Button onPress={this._showDialog}>INFO</Button>
                    <Button>IGNORE</Button>
                  </Card.Actions>
                </Card>
              );
            })}
            <Portal>
              <Dialog visible={this.state.visible} onDismiss={this._hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>
                    We are all second-year students that have a passion in CS.
                  </Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={this._hideDialog}>Chat</Button>
                  <Button onPress={this._hideDialog}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </ScrollView>
          {/* </View> */}
        </ImageBackground>
        <Snackbar
          visible={this.state.snack}
          onDismiss={() => this.setState({ snack: false })}
        >
          Joining the group
        </Snackbar>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "flex-start",
    alignContent: "center",
    flexGrow: 1,
    flex: 1,
    flexDirection: "column"
  },
  statusBar: {
    height: 10
  },
  avatarStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  avatar: {
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  container: {
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
