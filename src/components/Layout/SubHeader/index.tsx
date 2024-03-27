import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../../../navigation/routes';
import Dashboard from '../../Dashboard';
import Sites from '../../Sites';
import FAIcon from '../../Common/FAIcon';
import Orders from '../../Orders';
import Contacts from '../../Contacts';
import Products from '../../Products';
import Reports from '../../Reports';

const Tabs = createBottomTabNavigator();

const SubHeader = () => {
  return (
    <Tabs.Navigator
      initialRouteName={Routes.DASHBOARD}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 4,
        },
        tabBarLabelStyle: {
          lineHeight: 16,
        },
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#207cb9',
      }}>
      <Tabs.Screen
        name={Routes.DASHBOARD}
        component={Dashboard}
        options={{
          tabBarIcon: ({color}: any) => <FAIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name={Routes.SITES}
        component={Sites}
        options={{
          tabBarIcon: ({color}: any) => <FAIcon name="globe" color={color} />,
        }}
      />
      <Tabs.Screen
        name={Routes.ORDERS}
        component={Orders}
        options={{
          tabBarIcon: ({color}: any) => (
            <FAIcon name="shopping-cart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={Routes.CONTACTS}
        component={Contacts}
        options={{
          tabBarIcon: ({color}: any) => <FAIcon name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name={Routes.PRODUCTS}
        component={Products}
        options={{
          tabBarIcon: ({color}: any) => <FAIcon name="th" color={color} />,
        }}
      />
      <Tabs.Screen
        name={Routes.REPORTS}
        component={Reports}
        options={{
          tabBarIcon: ({color}: any) => <FAIcon name="signal" color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default SubHeader;
