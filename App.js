import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';

export default function App() {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.backButton}>
          <Image 
            style={styles.arrow}
            source={require("./assets/arrow-left-solid.png")}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        Welcome Back!
      </Text>

      <TouchableOpacity style={styles.facebookButton}>
        <Image
          style={styles.facebookLogo}
          source={require("./assets/facebook-logo.png")}
        />
        <Text style={styles.facebookText}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          style={styles.googleLogo}
          source={require("./assets/google-logo.png")}
        />
        <Text style={styles.googleText}>
          Continue with Google
        </Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>
        Or log in with email
      </Text>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email address"
          placeholderTextColor="#A1A4b2"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#A1A4b2"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>
          Log in
        </Text>
      </TouchableOpacity>

      <Text style={styles.bodyText}>
        Forgot Password?
      </Text>

      <View style={styles.footer}>
        <Text style={styles.subtitle}>
          Already have an account? Sign up
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 56,
  },

  navBar: {
    width: "100%",
    alignItems: "left",
  },

  backButton: {
    width: 65,
    height: 65,
    opacity: 0.5,
    borderRadius: 65/2,
    borderWidth: 1,
    borderColor: "#EBEAEC",
    padding: 65/3,
    marginBottom: 24,
  },
  
  arrow: {
    width: 65/3,
    height: 65/3,
  },

  title: {
    fontFamily: "HelveticaNeue",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: 700,
    height: 38,
    alignItems: "center",
    marginBottom: 32
  },

  subtitle: {
    textTransform: "uppercase",
    color: "#A1A4B2",
    fontFamily: "HelveticaNeue",
    fontSize: 14,
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: 15,
    letterSpacing: 0.2,
    marginBottom: 40,
    marginTop: 40,
  },

  bodyText: {
    fontFamily: "HelveticaNeue",
    fontWeight: "normal",
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 15,
    letterSpacing: 0.2,
  },

  facebookButton: {
    backgroundColor: "#7583CA",
    flexDirection: "row",
    width: "100%", 
    height: 76,
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24
  },
  googleButton: {
    backgroundColor: "#3F414",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EBEAEC",
    width: "100%", 
    height: 76,
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  facebookText: {
    textTransform: "uppercase",
    fontFamily: "HelveticaNeue",
    letterSpacing: 0.5,
    fontStyle: "normal",
    lineHeight: 55,
    marginHorizontal: 20,
    color: "#F6F1FB",
  },
  googleText: {
    textTransform: "uppercase",
    fontFamily: "HelveticaNeue",
    letterSpacing: 0.5,
    fontStyle: "normal",
    lineHeight: 55,
    marginHorizontal: 20,
    color: "#3F414E",
  },
  facebookLogo: {
    position: "absolute",
    left: 65/2,
    height: 76/3,
    width: 76/5
  },
  googleLogo: {
    position: "absolute",
    left: 65/2.5,
    height: 76/3,
    width: 76/3
  },

  inputView: {
    backgroundColor: "#F2F3F7",
    borderRadius: 15,
    width: "100%",
    height: 65,
    marginBottom: 24,
    alignItems: "left",
  },
  TextInput: {
    width: "100%",
    height: 45,
    flex: 1,
    padding: 10,
    marginLeft: 10
  },

  loginButton: {
    backgroundColor: "#8E97FD",
    width: "100%", 
    height: 76,
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24
  },
  loginText: {
    textTransform: "uppercase",
    fontFamily: "HelveticaNeue",
    letterSpacing: 0.5,
    fontStyle: "normal",
    lineHeight: 55,
    marginHorizontal: 20,
    color: "#F6F1FB",
  },
  footer: {
    marginTop: 'auto'
  },
});
