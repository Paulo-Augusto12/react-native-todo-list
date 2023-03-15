import { Home } from "./screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Navigator = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator.Navigator screenOptions={{ headerShown: false }}>
        <Navigator.Screen name="Home" component={Home} />
      </Navigator.Navigator>
    </NavigationContainer>
  );
}
