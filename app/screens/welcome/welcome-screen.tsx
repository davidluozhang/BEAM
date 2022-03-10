/* eslint-disable max-len */
import React, {FC, useState} from "react";
import {View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, TouchableOpacity} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {observer} from "mobx-react-lite";
import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from "../../components";
import {color, spacing, typography} from "../../theme";
import {NavigatorParamList} from "../../navigators";
import {TextInput} from "react-native-gesture-handler";
import {palette} from "../../theme/palette";
import {placeholder} from "i18n-js";

const logo = require("./Stronkjak.png");

const FULL: ViewStyle = {flex: 1};
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
};
const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
};
const BOLD: TextStyle = {fontWeight: "bold"};
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
};
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
};
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
};
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
};
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 20,
  fontStyle: "italic",
  textAlign: "center",

};
const IMAGE: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 343,
  height: 230,
};
const CONTENT: TextStyle = {
  ...TEXT,
  color: color.palette.black,
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
};
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "transparent",
};
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
};
const FOOTER: ViewStyle = {backgroundColor: "#20162D"};
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
};
const TEXT_INPUT: ViewStyle = {
  backgroundColor: "transparent",
  borderColor: color.palette.black,
  alignItems: "center",
};

const TEXT_INPUT_BOX: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.lighterGrey,
  borderRadius: 10,
  borderColor: color.palette.black,
  width: "70%",
  height: 45,
  marginBottom: 5,
  alignItems: "center",
};

const FORGOT_BUTTON: TextStyle = {
  height: 30,
  marginTop: 5,
  textAlign: "center",
  color: color.palette.orange,
};

const LOGIN: ViewStyle = {
  backgroundColor: "transparent",
  borderColor: color.palette.black,
  alignItems: "center",
};

const LOGIN_BUTTON: ViewStyle = {
  width: "70%",
  borderRadius: 30,
  height: 45,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 15,
  marginBottom: 15,
  // backgroundColor: color.palette.orangeDarker,
};

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
    ({navigation}) => {
      const nextScreen = () => navigation.navigate("demo");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      return (
        <View testID="WelcomeScreen" style={FULL}>
          <GradientBackground colors={[color.palette.offWhite, color.palette.offWhite]} />
          <Screen style={CONTAINER} backgroundColor={color.transparent}>
            <Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} />
            <Text style={TITLE_WRAPPER}>
              <Text style={TITLE} text="Welcome to Beam!" />
            </Text>
            <Text style={ALMOST} text="Safety. Reimagined." />
            <Image source={logo} style={IMAGE} />
            {/* <Text style={CONTENT}>
            A Work in Progress.
          </Text> */}
            {/* <Text style={CONTENT}>
            Ruchir Baronia, Aditya Bose, and David Zhi LuoZhang
          </Text> */}
          </Screen>
          <SafeAreaView style={TEXT_INPUT}>
            <View style={TEXT_INPUT_BOX}>
              <TextInput
                testID="login-username"
                placeholder= "Username"
                placeholderTextColor={palette.black}
                onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View style={TEXT_INPUT_BOX}>
              <TextInput
                testID="login-password"
                placeholder= "Password"
                placeholderTextColor={palette.black}
                secureTextEntry={true}
                textAlign={"center"}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
          </SafeAreaView>

          <TouchableOpacity>
            <Text style={FORGOT_BUTTON}>Forgot Password?</Text>
          </TouchableOpacity>

          <SafeAreaView style={LOGIN}>
            <View style = {LOGIN_BUTTON}>
              <Button
                testID="next-screen-button"
                style={CONTINUE}
                textStyle={CONTINUE_TEXT}
                tx="welcomeScreen.continue"
                onPress={nextScreen}
              />
            </View>
          </SafeAreaView>
        </View>
      );
    },
);
