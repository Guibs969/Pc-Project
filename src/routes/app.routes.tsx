import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { OptionsDrawerContent } from '@/src/components/OptionsDrawerContent'; 

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <OptionsDrawerContent {...props} />}
      screenOptions={{ headerShown: false,  drawerPosition: "right"}}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export function AppRoutes() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={DrawerRoutes} />
      </Stack.Navigator>
  );
}