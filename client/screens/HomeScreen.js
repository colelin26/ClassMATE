import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import PickDate from "./HomeScreenView/PickDate";
import GetStarted from "./HomeScreenView/GetStarted";
import SelectCourse from "./HomeScreenView/SelectCourse";
import PickGroupSize from "./HomeScreenView/PickGroupSize";
import MatchResult from "./HomeScreenView/MatchResult";

export default (HomeStack = createStackNavigator(
  {
    GetStarted: { screen: GetStarted },
    SelectCourse: { screen: SelectCourse },
    PickDate: { screen: PickDate },
    PickGroupSize: { screen: PickGroupSize },
    MatchResult: { screen: MatchResult }
  },
  {
    initialRouteName: "GetStarted"
  }
));

// export default class HomeScreen extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   static navigationOptions = {
//     header: null
//   };

//   render() {
//     switch (this.state.CurrentPage) {
//       case LOGIN_PAGE:
//         return (
//           <LoginPage
//             handleClickLogin={this.handleClickLogin}
//             handleChangePage={this.handleChangePage}
//           />
//         );
//       case GET_STARTED:
//         return <GetStarted handleChangePage={this.handleChangePage} />;
//       default:
//         return (
//           <LoginPage
//             handleClickLogin={this.handleClickLogin}
//             handleChangePage={this.handleChangePage}
//           />
//         );
//     }
//   }
// }
