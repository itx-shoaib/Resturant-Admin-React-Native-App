import * as React from "react";
import { Button, Card, Switch } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Navbar from "../Components/Navbar";
import RestaurantManagement from "../Components/RestaurantManagement";
import Apps from "../Components/Apps";
import DeliveryArea from "../Components/DeliveryArea"
import WorkingHours from "../Components/WorkingHours"
import OpenClose from "../Components/OpenClose"
import MenuType from "../Components/MenuType"
import LoyaltyScheme from "../Components/LoyaltyScheme"
import ReferralScheme from "../Components/ReferralScheme"
import Config from "../Components/Config"
import Content from "../Components/Content"


const FirstRoute = () => <RestaurantManagement />;

const SecondRoute = () => <Apps />;

const ThirdRoute = () => <DeliveryArea />;

const FourthRoute = () => <WorkingHours />;

const FifthRoute = () => <OpenClose />;

const SixthRoute = () => <MenuType />;

const SeventhRoute = () => <LoyaltyScheme />;

const EigthRoute = () => <ReferralScheme />;

const NinethRoute = () => <Config />;

const TenthRoute = () => <Content />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute,
  seventh: SeventhRoute,
  eigth: EigthRoute,
  nineth: NinethRoute,
  tenth: TenthRoute,
});
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "white" }}
    style={{ backgroundColor: "blue" }}
    scrollEnabled={true}    
  />
);

export default function Settings() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Restaurant Management" },
    { key: "second", title: "Apps" },
    { key: "third", title: "Delivery Area" },
    { key: "fourth", title: "Working Hours" },
    { key: "fifth", title: "Open/Close" },
    { key: "sixth", title: "Menu Type" },
    { key: "seventh", title: "Loyalty Scheme" },
    { key: "eigth", title: "Referral Scheme" },
    { key: "nineth", title: "Config" },
    { key: "tenth", title: "Content" },
  ]);

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 40 : 0 }}>
      <Navbar />
      <View style={{ width: layout.width, height: layout.height }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
}
