import React from "react";
import { Button, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./App";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenProps = StackScreenProps<RootStackParamList, "ScreenTwo">;

export const ScreenTwo = ({ navigation, route }: ScreenProps) => {
  const { bottom } = useSafeAreaInsets();

  const onPress = () => {
    navigation.navigate(route.params.nextScreen);
  };

  return (
    <View
      style={{
        position: "absolute",
        bottom,
        left: 0,
        right: 0,
      }}
    >
      <Button title={`Go to ${route.params.nextScreen}`} onPress={onPress} />
    </View>
  );
};
