import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: connect to backend or Firebase
    console.log("Logging in with", email, password);
    router.replace("/(tabs)/nature-meditate");
  };

  return (
    <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
      <SafeAreaView className="flex-1 justify-center px-6">
        <Text className="text-white text-4xl font-bold mb-6 text-center">
          Login
        </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          className="bg-white/10 text-white px-4 py-3 rounded-xl mb-4"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="bg-white/10 text-white px-4 py-3 rounded-xl mb-6"
        />

        <CustomButton title="Login" onPress={handleLogin} />
        <Text
          className="text-center text-gray-300 mt-4"
          onPress={() => router.push("/signup")}
        >
          Don’t have an account? Sign up
        </Text>
      </SafeAreaView>
    </AppGradient>
  );
}
