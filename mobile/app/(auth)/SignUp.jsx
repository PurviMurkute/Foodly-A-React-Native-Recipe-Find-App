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
import signup from "../../assets/images/signup.png";
import Theme from "../../src/styles/colors";
import { useState } from "react";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  const [signupUser, setSignupUser] = useState({
    email: "",
    password: "",
  });


  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView style={authStyles.keyboardView} behavior="padding">
        <ScrollView
          contentContainerStyle={authStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Image source={signup} style={authStyles.image} />
          <Text style={authStyles.text}>Welcome, SignUp to access all the recipes 🥗</Text>
          <TextInput
            style={authStyles.input}
            placeholder="Name"
            value={signupUser.name}
            onChangeText={(text) => {
              setSignupUser({ ...signupUser, name: text });
            }}
            autoCapitalize="none"
          />
          <TextInput
            style={authStyles.input}
            placeholder="Email"
            value={signupUser.email}
            onChangeText={(text) => {
              setSignupUser({ ...signupUser, email: text });
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={authStyles.input}
            placeholder="Password"
            value={signupUser.password}
            onChangeText={(text) => {
              setSignupUser({ ...signupUser, password: text });
            }}
            secureTextEntry
          />
          <TouchableOpacity style={authStyles.button}>
            <Text
              style={{
                color: Theme.textWhite,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 20 }}>
            Already have an account?{" "}
            <Text
              style={{ color: Theme.primary }}
              onPress={() => router.push("/(auth)/SignIn")}
            >
              Sign In
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;