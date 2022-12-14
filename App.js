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
import Rank from './Pages/Rank';
import AddRank from "./Pages/AddRank"
import EditRank from "./Pages/EditRank"
import ChangePassword from "./Pages/ChangePassword"
import OrdersReport from "./Pages/OrdersReport"
import Profile from "./Pages/Profile"
import MyProfile from './Pages/MyProfile';
import Translation from './Pages/Translation';
import Language from './Pages/Language';
import AddLanguage from './Pages/AddLanguage';
import AddTranslation from './Pages/AddTranslation';
import Discount from './Pages/Discount';
import AddCoupon from './Pages/AddCoupon';
import BulkSms from './Pages/BulkSms';
import Share from './Pages/Share';
import Menu from './Pages/Menu';
import ItemManagement from './Pages/ItemManagement';
import LiveOrder from './Pages/LiveOrder';
import Setting from "./Pages/Settings";

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
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Rank"
          component={Rank}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="AddRank"
          component={AddRank}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="EditRank"
          component={EditRank}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="ChangePassword"
          component={ChangePassword}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="OrdersReport"
          component={OrdersReport}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="MyProfile"
          component={MyProfile}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Translation"
          component={Translation}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Language"
          component={Language}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="AddLanguage"
          component={AddLanguage}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="AddTranslation"
          component={AddTranslation}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Discount"
          component={Discount}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="AddCoupon"
          component={AddCoupon}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="BulkSms"
          component={BulkSms}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Share"
          component={Share}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Menu"
          component={Menu}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="ItemManagement"
          component={ItemManagement}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="LiveOrder"
          component={LiveOrder}
        />
                <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Settings"
          component={Setting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

