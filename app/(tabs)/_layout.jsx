import {Text, View, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';


const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className=" items-center justify-center gap-1">
          <Image
              source={icon}
              resizeMode="contain"
              tintColor={color}
              className="w-6 h-6"
          />
          <Text className={`$focused ? 'font-poppins_bold' : 'font-poppins_light'} text-xs`} style={{color: color}}>
              {name}
          </Text>
      </View>
      
  );
};

const TabsLayout = () => {
  return (
      <>
          <Tabs screenOptions={
              {
                  tabBarShowLabel: false,
                  tabBarActiveTintColor: '#FFdDd8',
                  tabBarInactiveTintColor: '#1F1d18',
                  tabBarStyle: {
                      backgroundColor: '#FF1D48',
                      borderTopWidth: 1,
                      borderTopColor: '#FF6D48',


                  }
              }
        }>
              <Tabs.Screen
                  name="home"
                  options={{
                      title: 'Home',
                      headerShown: false,
                      tabBarIcon: ({ color, focused }) => (
                          <TabIcon
                              icon={icons.home}
                              color={color}
                              name="Home"
                              focused={focused}
                   
                          />
                      )
                  }}
              />  
              <Tabs.Screen
                  name="create"
                  options={{
                      title: 'Create',
                      headerShown: false,
                      tabBarIcon: ({ color, focused }) => (
                          <TabIcon
                              icon={icons.play}
                              color={color}
                              name="Create"
                              focused={focused}

                          />
                      )
                  }}
              />  

         

              <Tabs.Screen
                  name="profile"
                  options={{
                      title: 'Profile',
                      headerShown: false,
                      tabBarIcon: ({ color, focused }) => (
                          <TabIcon
                              icon={icons.profile}
                              color={color}
                              name="Profile"
                              focused={focused}

                          />
                      )
                  }}
              />  

        </Tabs>
      </>
  )
}

export default TabsLayout;

