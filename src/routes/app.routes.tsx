import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Detalhes } from '../screens/Detalhes';
import { Desktop } from '../screens/Desktop';
import { OptionsDrawerContent } from '@/src/components/OptionsDrawerContent'; 

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Desktop" component={Desktop} />
      <Stack.Screen name="Detalhes" component={Detalhes} initialParams={{ id: null }} />
    </Stack.Navigator>
  );
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <OptionsDrawerContent {...props} />}
      screenOptions={{ headerShown: false, drawerPosition: "right" }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
}

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={DrawerRoutes} />
      <Stack.Screen name="Desktop" component={Desktop} />
      <Stack.Screen name="Detalhes" component={Detalhes} initialParams={{ id: null }} />
    </Stack.Navigator>
  );
}