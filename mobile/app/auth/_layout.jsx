import { Redirect, Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

export default function AuthLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 

  useEffect(() => {
    const checkAuth = async () => {
      const jwt = await AsyncStorage.getItem("jwt");
      setIsAuthenticated(!!jwt); // true if jwt exists, false otherwise
    };

    checkAuth();
  }, []);


  if (isAuthenticated) {
    return <Redirect href="/tabs/home" />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
