import React, { FC } from "react"
import { ImageStyle, Platform, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  BulletItem,
  Button,
  Header,
  Text,
  Screen,
  AutoImage as Image,
  GradientBackground,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing } from "../../theme"
import { Api } from "../../services/api"
import { save } from "../../utils/storage"
import MapView, {Marker} from 'react-native-maps'
export const tempMap = require("./TempMap.png")
export const heart = require("./heart.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const DEMO: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.lighterGrey,
  alignSelf: "center",
  //maxWidth: "90%",
  width: 320,
  marginVertical: 5,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const DEMO_TEXT: TextStyle = {
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
  color: color.palette.navy,
}
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
  //color: color.palette.blue,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
  color: color.palette.black
}
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  //paddingBottom: 10,
  marginBottom: spacing[1],
  color: color.palette.navy,
}
const TAGLINE: TextStyle = {
  color: color.palette.navy,
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[4] + spacing[1],
}
const TempMap: ImageStyle = {
  paddingTop: 10,
  paddingBottom: 40,
  marginTop: spacing[3],
  marginBottom: spacing[4],
  alignSelf: "center",
  width: 350,
  height: 350,
}
const LOVE_WRAPPER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
}
const LOVE: TextStyle = {
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
}
const HEART: ImageStyle = {
  marginHorizontal: spacing[2],
  width: 10,
  height: 10,
  resizeMode: "contain",
}
const HINT: TextStyle = {
  color: "#BAB6C8",
  fontSize: 12,
  lineHeight: 15,
  marginVertical: spacing[2],
}

const platformCommand = Platform.select({
  ios: "Cmd + D",
  android: "Cmd/Ctrl + M",
})

export const DemoScreen: FC<StackScreenProps<NavigatorParamList, "demo">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack()

    const demoReactotron = React.useMemo(
      () => async () => {
        console.tron.log("Your Friendly tron log message")
        console.tron.logImportant("I am important")
        console.tron.display({
          name: "DISPLAY",
          value: {
            numbers: 1,
            strings: "strings",
            booleans: true,
            arrays: [1, 2, 3],
            objects: {
              deeper: {
                deeper: {
                  yay: "????",
                },
              },
            },
            functionNames: function hello() {
              /* dummy function */
            },
          },
          preview: "More control with display()",
          important: true,
          image: {
            uri: "https://avatars2.githubusercontent.com/u/3902527?s=200&u=a0d16b13ed719f35d95ca0f4440f5d07c32c349a&v=4",
          },
        })
        // make an API call for the demo
        // Don't do API like this, use store's API
        const demo = new Api()
        demo.setup()
        demo.getUser("1")
        // Let's do some async storage stuff
        await save("Cool Name", "Boaty McBoatface")
      },
      [],
    )

    return (
      <View testID="DemoScreen" style={FULL}>
        <GradientBackground colors={[color.palette.offWhite, color.palette.offWhite]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header
            headerTx="demoScreen.howTo"
            leftIcon="back"
            onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
          <Text style={TITLE} preset="header" tx="demoScreen.title" />
          {/* <Text style={TAGLINE} tx="demoScreen.tagLine" /> */}
          {/* <BulletItem text="Integrated here, Navigation with State, TypeScript, Storybook, Solidarity, and i18n." />
          <BulletItem
            text={`To run Storybook, press ${platformCommand} or shake the device to show the developer menu, then select "Toggle Storybook"`}
          /> */}
          {/* <BulletItem text="Load up Reactotron!  You can inspect your app, view the events, interact, and so much more!" /> */}
          {/* <Text style={HINT} text={"Get Matched Asap"} /> */}
          
          <View>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          </View>

          <Image source={tempMap} style={TempMap} />


          <View>
            <Button
              style={DEMO}
              textStyle={DEMO_TEXT}
              text = {"BEAM Now - Get Matched ASAP"}
              //tx="demoScreen.reactotron"
              onPress={() => 1}
            />
          </View>
          {/* //<Text style={HINT} text={"Schedule a Walk"} /> */}
          <View>
            <Button
              style={DEMO}
              textStyle={DEMO_TEXT}
              text = {"BEAM Later - Schedule a Walk"}
              //tx="demoScreen.reactotron"
              onPress={() => 1}
            />
          </View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            text = {"View Nearby Users"}
            //tx="demoScreen.demoList"
            onPress={() => navigation.navigate("demoList")}
          />
          {/* <Image source={logoIgnite} style={IGNITE} />
          <View style={LOVE_WRAPPER}>
            <Text style={LOVE} text="Made with" />
            <Image source={heart} style={HEART} />
            <Text style={LOVE} text="by Infinite Red" />
          </View> */}
        </Screen>
      </View>
    )
  },
)
