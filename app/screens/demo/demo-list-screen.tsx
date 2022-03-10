/* eslint-disable max-len */
import React, {useEffect, FC} from "react";
import {FlatList, TextStyle, View, ViewStyle, ImageStyle, StyleSheet} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {observer} from "mobx-react-lite";
import {Header, Screen, Text, AutoImage as Image, GradientBackground} from "../../components";
import {color, spacing} from "../../theme";
import {useStores} from "../../models";
import {NavigatorParamList} from "../../navigators";

// const FULL: ViewStyle = {
//   flex: 1,
// };
// const CONTAINER: ViewStyle = {
//   backgroundColor: color.transparent,

// };
// const HEADER: TextStyle = {
//   paddingBottom: spacing[5] - 1,
//   paddingHorizontal: spacing[4],
//   paddingTop: spacing[3],
// };
// const HEADER_TITLE: TextStyle = {
//   fontSize: 12,
//   fontWeight: "bold",
//   letterSpacing: 1.5,
//   lineHeight: 15,
//   textAlign: "center",
//   color: color.palette.blue,
// };
// const LIST_CONTAINER: ViewStyle = {
//   alignItems: "center",
//   flexDirection: "row",
//   padding: 10,
// };
// const IMAGE: ImageStyle = {
//   borderRadius: 35,
//   height: 65,
//   width: 65,
// };
// const LIST_TEXT: TextStyle = {
//   marginLeft: 10,
//   flex: 1,
//   color: color.palette.blue,
// };
// const FLAT_LIST: ViewStyle = {
//   paddingHorizontal: spacing[4],
// };

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  container: {
    backgroundColor: color.transparent,
  },
  header: {
    paddingBottom: spacing[5] - 1,
    paddingHorizontal: spacing[4],
    paddingTop: spacing[3],
  },
  headerTitle: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: "center",
    color: color.palette.blue,
  },
  listContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  image: {
    borderRadius: 35,
    height: 65,
    width: 65,
  },
  listText: {
    marginLeft: 10,
    flex: 1,
    color: color.palette.blue,
  },
  flatLast: {
    paddingHorizontal: spacing[4],
  },
});

export const DemoListScreen: FC<StackScreenProps<NavigatorParamList, "userList">> = observer(
    ({navigation}) => {
      const goBack = () => navigation.goBack();

      const {characterStore} = useStores();
      const {characters} = characterStore;

      useEffect(() => {
        async function fetchData() {
          await characterStore.getCharacters();
        }

        fetchData();
      }, []);

      return (
        <View testID="DemoListScreen" style={styles.full}>
          <GradientBackground colors={[color.palette.offWhite, color.palette.offWhite]} />
          <Screen style={styles.container} preset="fixed" backgroundColor={color.transparent}>
            <Header
              headerTx="demoListScreen.title"
              leftIcon="back"
              onLeftPress={goBack}
              style={styles.header}
              titleStyle={styles.headerTitle}
            />
            <FlatList
              contentContainerStyle={styles.flatLast}
              data={[...characters]}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => (
                <View style={styles.listContainer}>
                  <Image source={{uri: item.image}} style={styles.image} />
                  <Text style={styles.listText}>
                    {item.name} ({"" + (Math.random() * 5).toFixed(2)+ " Mi. Away"})
                  </Text>
                </View>
              )}
            />
          </Screen>
        </View>
      );
    },
);
