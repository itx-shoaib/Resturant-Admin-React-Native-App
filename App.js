import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Customer from './Pages/Customer';
import Dashboard from './Pages/Dashboard';
import Clientlogin from './Pages/Login';
import Order from './Pages/Order';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Login"
          component={Clientlogin}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Customer"
          component={Customer}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Order"
          component={Order}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

