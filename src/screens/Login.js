import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require("../images/logo.png")} style={styles.logoImage} />
      <Text style={styles.sloganText}>Always keep susu</Text>
      <Text style={styles.sloganDescription}>
        Susu is a Cambodian word which means "To be Resilent". People use this
        word to cheer others up and tell them to keep fighting for a certain
        goal.
      </Text>
      <View style={styles.textInputContainer}>
        <MaterialIcons name="mail" color="#00716F" size={24} />
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.textInputContainer}>
        <MaterialIcons name="lock" color="#00716F" size={24} />
        <TextInput style={styles.textInput} />
      </View>

      <TouchableOpacity
        style={styles.bsaLoginButtonContainer}
        onPress={() => {
          console.log("Button Pressed");
          props.navigation.navigate("BSALoginWebview");
        }}
      >
        <View style={styles.bsaLoginButton}>
          <Text style={styles.bsaLoginButtonText}>Login with BSA</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
  },
  logoImage: {
    width: "90%",
    height: "40%",
  },
  sloganText: {
    fontSize: 30,

    alignSelf: "center",
  },
  sloganDescription: {
    marginHorizontal: 55,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.4,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    // marginTop: 50,
    marginVertical: 20,
    paddingHorizontal: 10,
    borderColor: "#00716F",
    borderRadius: 23,
    paddingVertical: 2,
  },
  textInput: {
    paddingHorizontal: 10,
  },
  bsaLoginButtonContainer: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#00716F",
    marginHorizontal: 55,
  },
  bsaLoginButtonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  bsaLoginButton: {},
});

export default Login;
