import React, {useEffect, FC, useState} from "react";
import {observer} from "mobx-react-lite";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import {ImageStyle, Platform, TextStyle, View, ViewStyle, StyleSheet} from "react-native";
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import {NavigatorParamList} from "../../navigators";
import {StackScreenProps} from "@react-navigation/stack";
import {TextInput} from "react-native-gesture-handler";
import {color, spacing} from "../../theme";
import {BulletItem, Button, Header, Text, Screen, AutoImage as Image, GradientBackground} from "../../components";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {palette} from "../../theme/palette";

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
};

const FULL: ViewStyle = {flex: 1};

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  // paddingHorizontal: spacing[4],
};

const HEADER: TextStyle = {
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: spacing[4],
  paddingTop: spacing[3],
  textAlign: "center",
  color: color.palette.blue,
  marginTop: 15,
};
const HEADER_TITLE: TextStyle = {
  fontSize: 12,
  fontWeight: "bold",
  letterSpacing: 1.5,
  lineHeight: 15,
  textAlign: "center",
  color: color.palette.black,
};

const TEXT_INPUT: ViewStyle = {
  backgroundColor: "transparent",
  borderColor: color.palette.black,
  alignItems: "center",
  alignSelf: "center",
  paddingBottom: 5,
  width: 320,
};

const TEXT_INPUT_BOX: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.lighterGrey,
  borderRadius: 10,
  borderColor: color.palette.black,
  width: 320,
  height: 45,
  marginBottom: spacing[1],
};

const styles = StyleSheet.create({
  map: {
    // paddingTop: 10,
    // paddingBottom: 10,
    marginTop: 20,
    marginBottom: spacing[1],
    alignSelf: "center",
    width: 320,
    height: 320,
    borderRadius: 10,
  },
});

const TITLE: TextStyle = {
  fontSize: 28,
  lineHeight: 38,
  fontWeight: "bold",
  textAlign: "center",
  // paddingBottom: 10,
  // marginVertical: spacing[3],
  color: color.palette.blue,
};

const MATCH_BUTTON: ViewStyle = {
  width: "70%",
  borderRadius: 10,
  height: 45,
  alignItems: "center",
  justifyContent: "center",
  // marginTop: 10,
  marginBottom: 15,
  // backgroundColor: color.palette.orangeDarker,
};

const BUTTON: ViewStyle = {
  backgroundColor: "transparent",
  borderColor: color.palette.black,
  alignItems: "center",
  // paddingBottom: 20,
};

const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "transparent",
};
const CONTINUE_TEXT: TextStyle = {
  // color: color.palette.black,
  // fontFamily: typography.primary,
  fontWeight: "bold",
  fontSize: 13,
  letterSpacing: 2,
  color: color.palette.orangeDarker,
  textTransform: "uppercase",
};

export const BeamNowScreen: FC<StackScreenProps<NavigatorParamList, "beamNow">> = observer(
    ({navigation}) => {
      const goBack = () => navigation.goBack();

      const [destination, setDestination] = useState("");

      return (
        <View testID="BeamNowScreen" style={FULL}>
          <GradientBackground colors={[color.palette.offWhite, color.palette.offWhite]} />
          <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent} />
          <Header // style={ROOT}
            style={HEADER}
            headerTx= "beamNowScreen.beam"
            leftIcon="back"
            onLeftPress={goBack}
            titleStyle={HEADER_TITLE}
          />
          <Text style={TITLE} preset="header" tx="beamNowScreen.title" />

          <SafeAreaView style={TEXT_INPUT}>
            <View style={TEXT_INPUT_BOX}>
              <TextInput
                testID="Destination"
                placeholder= "Destination"
                placeholderTextColor={palette.black}
                onChangeText={(destination) => setDestination(destination)}
              />
            </View>
          </SafeAreaView>


          <SafeAreaView style={TEXT_INPUT}>
            <View style={TEXT_INPUT_BOX}>
              <TextInput
                testID="DepartureTime"
                placeholder= "Departure Time (Optional)"
                placeholderTextColor={palette.black}
                onChangeText={(destination) => setDestination(destination)}
              />
            </View>
          </SafeAreaView>

          <View>
            <MapView style = {styles.map}
              provider = {PROVIDER_GOOGLE}
              initialRegion={{
                latitude: 37.8719,
                longitude: -122.2585,
                latitudeDelta: 0.02,
                longitudeDelta: 0.01,
              }}
            />
          </View>

          <SafeAreaView style={BUTTON}>
            <View style = {MATCH_BUTTON}>
              <Button
                testID="queue-button"
                style={CONTINUE}
                textStyle={CONTINUE_TEXT}
                tx="beamNowScreen.queue"
                // onPress={nextScreen}
              />
            </View>
          </SafeAreaView>

        </View>
      );
    },
);
