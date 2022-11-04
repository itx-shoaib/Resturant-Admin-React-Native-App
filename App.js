import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Customer from './Pages/Customer';
import Dashboard from './Pages/Dashboard';
import Drawer from './Pages/Drawer';
import Clientlogin from './Pages/Login';
import Order from './Pages/Order';
import Page from './Pages/Page';
import Resturant from './Pages/Resturant';
import ResturantManagement from './Pages/ResturantManagement';
import AddPage from './Pages/AddPage'

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
          name="Resturant"
          component={Resturant}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="ResturantManagement"
          component={ResturantManagement}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Order"
          component={Order}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Drawer"
          component={Drawer}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Page"
          component={Page}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="AddPage"
          component={AddPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

