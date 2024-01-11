import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";
import { ScreenThree } from "./ScreenThree";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type RootStackParamList = {
  ScreenOne: undefined;
  ScreenTwo: {
    nextScreen: "ScreenOne" | "ScreenThree";
  };
  ScreenThree: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="ScreenOne">
          <RootStack.Screen name="ScreenOne" component={ScreenOne} />
          <RootStack.Screen name="ScreenTwo" component={ScreenTwo} />
          <RootStack.Screen name="ScreenThree" component={ScreenThree} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
