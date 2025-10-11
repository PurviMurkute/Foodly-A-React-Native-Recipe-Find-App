import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { authStyles } from "../../src/styles/authStyles";
import { Image } from "expo-image";
import login from "../../assets/images/login.png";
import Theme from "../../src/styles/colors";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const SignIn = () => {
  const router = useRouter();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  

  const handleLogin = async () => {
    try {
      const response = await axios.post(`/login`, {
        email: loginUser.email,
        password: loginUser.password,
      });

      if (response.data.success) {
        await AsyncStorage.setItem("jwt", response.data.jwtToken);
        setLoginUser(response.data.data);
        Toast.show({
          type: "success",
          text1: "Login Successful",
          text2: response.data.message,
        });
        router.push("/(tabs)/index");
      } else {
        console.log(response.data.message);
        Toast.show({
          type: "error",
          text1: "Login Failed",
          text2: response.data.message,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <View style={{ ...authStyles.container, marginTop: 40 }}>
      <KeyboardAvoidingView style={authStyles.keyboardView} behavior="padding">
        <ScrollView
          contentContainerStyle={authStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Image source={login} style={authStyles.image} />
          <Text style={authStyles.text}>Welcome Back</Text>
          <TextInput
            style={authStyles.input}
            placeholder="Email"
            value={loginUser.email}
            onChangeText={(text) => {
              setLoginUser({ ...loginUser, email: text });
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={authStyles.input}
            placeholder="Password"
            value={loginUser.password}
            onChangeText={(text) => {
              setLoginUser({ ...loginUser, password: text });
            }}
            secureTextEntry
          />
          <TouchableOpacity style={authStyles.button} onPress={handleLogin}>
            <Text
              style={{
                color: Theme.textWhite,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SignIn
            </Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 20 }}>
            Don't have an account?{" "}
            <Text
              style={{ color: Theme.primary }}
              onPress={() => router.push("/(auth)/SignUp")}
            >
              Sign Up
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;