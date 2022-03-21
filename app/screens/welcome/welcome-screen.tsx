/* eslint-disable max-len */
import React, {FC, useState} from "react";
import {View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet} from "react-native";
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

const logo = require("./BeamLight1.png");

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  container: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
  },
  text: {
    fontFamily: typography.primary,
  },
  bold: {
    fontWeight: "bold",
  },
  header: {
    paddingTop: spacing[3],
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0,
    marginBottom: 10,
  },
  headerTitle: {
    fontFamily: typography.primary,
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    letterSpacing: 1.5,
    color: color.palette.black,
  },
  titleWrapper: {
    fontFamily: typography.primary,
    textAlign: "center",
  },
  title: {
    fontFamily: typography.primary,
    fontWeight: "bold",
    fontSize: 50,
    lineHeight: 50,
    textAlign: "center",
    color: color.palette.blue,
  },
  almost: {
    fontFamily: typography.primary,
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    color: color.palette.blue,
  },
  image: {
    alignSelf: "center",
    marginVertical: spacing[5],
    maxWidth: "120%",
    width: 343,
    height: 230,
  },
  continue: {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: "transparent",
  },
  continueText: {
    fontFamily: typography.primary,
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 2,
    color: color.palette.orange,
  },
  textInput: {
    backgroundColor: "transparent",
    borderColor: color.palette.lightGrey,
    alignItems: "center",
    color: palette.white,
  },
  textInputBox: {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: color.palette.lighterGrey,
    borderRadius: 10,
    borderColor: color.palette.white,
    width: "70%",
    height: 48,
    marginBottom: 5,
  },
  forgotButton: {
    height: 30,
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: color.palette.black,
  },
  login: {
    backgroundColor: "transparent",
    borderColor: color.palette.black,
    alignItems: "center",
  },
  loginButton: {
    width: "70%",
    borderRadius: 30,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
  },
});


// const FULL: ViewStyle = {flex: 1};
// const CONTAINER: ViewStyle = {
//   backgroundColor: color.transparent,
//   paddingHorizontal: spacing[4],
// };
// const TEXT: TextStyle = {
//   fontFamily: typography.primary,
// };
// const BOLD: TextStyle = {fontWeight: "bold"};
// const HEADER: TextStyle = {
//   paddingTop: spacing[3],
//   paddingBottom: spacing[4] + spacing[1],
//   paddingHorizontal: 0,
//   marginBottom: 10,
// };
// const HEADER_TITLE: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 12,
//   lineHeight: 15,
//   textAlign: "center",
//   letterSpacing: 1.5,
//   color: color.palette.black, // used to be grey
// };
// const TITLE_WRAPPER: TextStyle = {
//   ...TEXT,
//   textAlign: "center",
// };
// const TITLE: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 50,
//   lineHeight: 50,
//   textAlign: "center",
//   color: color.palette.blue,
// };
// const ALMOST: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 20,
//   fontStyle: "italic",
//   textAlign: "center",
//   color: color.palette.blue,

// };
// const IMAGE: ImageStyle = {
//   alignSelf: "center",
//   marginVertical: spacing[5],
//   maxWidth: "120%",
//   width: 343,
//   height: 230,
// };
// const CONTENT: TextStyle = {
//   ...TEXT,
//   color: color.palette.black,
//   fontSize: 15,
//   lineHeight: 22,
//   marginBottom: spacing[5],
// };
// const CONTINUE: ViewStyle = {
//   paddingVertical: spacing[4],
//   paddingHorizontal: spacing[4],
//   backgroundColor: "transparent",
// };
// const CONTINUE_TEXT: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 13,
//   letterSpacing: 2,
//   color: color.palette.orange,
// };
// const FOOTER: ViewStyle = {backgroundColor: "#20162D"};
// const FOOTER_CONTENT: ViewStyle = {
//   paddingVertical: spacing[4],
//   paddingHorizontal: spacing[4],
// };
// const TEXT_INPUT: ViewStyle = {
//   backgroundColor: "transparent",
//   borderColor: color.palette.lightGrey,
//   alignItems: "center",
// };

// const TEXT_INPUT_BOX: ViewStyle = {
//   paddingVertical: spacing[4],
//   paddingHorizontal: spacing[4],
//   backgroundColor: color.palette.lighterGrey,
//   borderRadius: 10,
//   borderColor: color.palette.black,
//   width: "70%",
//   height: 45,
//   marginBottom: 5,
//   // alignItems: "center",
// };

// const FORGOT_BUTTON: TextStyle = {
//   height: 30,
//   marginTop: 5,
//   fontSize: 12,
//   textAlign: "center",
//   color: color.palette.black,
// };

// const LOGIN: ViewStyle = {
//   backgroundColor: "transparent",
//   borderColor: color.palette.black,
//   alignItems: "center",
// };

// const LOGIN_BUTTON: ViewStyle = {
//   width: "70%",
//   borderRadius: 30,
//   height: 45,
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: 15,
//   marginBottom: 15,
//   // backgroundColor: color.palette.orangeDarker,
// };

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
    ({navigation}) => {
      const nextScreen = () => navigation.navigate("demo");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      return (
        <View testID="WelcomeScreen" style={styles.full}>
          <GradientBackground colors={[color.palette.offWhite, color.palette.offWhite]} />
          <Screen style={styles.container} backgroundColor={color.transparent}>
            <Header headerTx="welcomeScreen.poweredBy" style={styles.header} titleStyle={styles.headerTitle} />
            <Text style={styles.titleWrapper}>
              <Text style={styles.title} text="Beam" />
            </Text>
            <Text style={styles.almost} text="Safety. Reimagined." />

            <Image source={logo} style={styles.image} />

            {/* <Text style={CONTENT}>
            A Work in Progress.
          </Text> */}
            {/* <Text style={CONTENT}>
            Ruchir Baronia, Aditya Bose, and David Zhi LuoZhang
          </Text> */}
          </Screen>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style = {styles.textInput}>

            <View style={styles.textInputBox}>
              <TextInput
                style = {styles.textInput}
                testID="login-username"
                placeholder= "Username"
                placeholderTextColor={palette.grey}
                onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View style={styles.textInputBox}>
              <TextInput
                style = {styles.textInput}
                testID="login-password"
                placeholder= "Password"
                placeholderTextColor={palette.grey}
                secureTextEntry={true}
                // textAlign={"center"}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
          </KeyboardAvoidingView>

          {/* <SafeAreaView style={TEXT_INPUT}>
            <View style={TEXT_INPUT_BOX}>
              <TextInput
                testID="login-username"
                placeholder= "Username"
                placeholderTextColor={palette.grey}
                onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View style={TEXT_INPUT_BOX}>
              <TextInput
                testID="login-password"
                placeholder= "Password"
                placeholderTextColor={palette.grey}
                secureTextEntry={true}
                // textAlign={"center"}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
          </SafeAreaView> */}

          <TouchableOpacity>
            <Text style={styles.forgotButton}>Forgot Password?</Text>
          </TouchableOpacity>

          <SafeAreaView style={styles.login}>
            <View style = {styles.loginButton}>
              <Button
                testID="next-screen-button"
                style={styles.continue}
                textStyle={styles.continueText}
                tx="welcomeScreen.continue"
                onPress={nextScreen}
              />
            </View>
          </SafeAreaView>
        </View>
      );
    },
);
