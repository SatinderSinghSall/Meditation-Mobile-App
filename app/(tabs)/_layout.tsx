import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import React from "react";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

const Page = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 4,
        },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0.5,
          borderTopColor: "#E5E7EB", // subtle line
          backgroundColor: "#fff",
          paddingBottom: 6,
        },
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "flower-tulip" : "flower-tulip-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="open-book" size={focused ? 26 : 24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Page;
