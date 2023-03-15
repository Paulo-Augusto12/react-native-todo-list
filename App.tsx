import { Home } from "./screens/Home";
import { Editor } from "./screens/Editor";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Navigator = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator.Navigator screenOptions={{ headerShown: false }}>
        <Navigator.Screen name="Home" component={Home} />
        <Navigator.Screen name="Task_Editor" component={Editor} />
      </Navigator.Navigator>
    </NavigationContainer>
  );
}
