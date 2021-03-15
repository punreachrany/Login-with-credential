import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import BSALoginWebview from "./BsaLoginWebview";
import { MaterialIcons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

const Login = (props) => {
  const [isBSALoginPressed, setIsBSALoginPressed] = useState(false);

  const closeModal = () => {
    setIsBSALoginPressed(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.introductionContainer}>
        {/* Title & Subtitle */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>SUSU Application</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>
            We would like to bring your university into your hands.
          </Text>
        </View>
      </View>
      <View style={styles.loginContainer}>
        {/* Login Container */}
        <View style={styles.loginTitle}>
          <Text style={styles.loginTitleText}>Login to Continue</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput placeholder="E-mail" style={styles.textInput} />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput placeholder="Password" style={styles.textInput} />
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("Forgot Password Button Pressed");
          }}
        >
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}> Forgot Password </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Register an account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("Button Pressed");
            // props.navigation.navigate("BSALoginWebview");
            setIsBSALoginPressed(true);
          }}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login with BSA</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        visible={isBSALoginPressed}
        animationType="slide"
        transparent={true}
        // onRequestClose={this.close}
      >
        {/* <View style={{ marginTop: 100 }}>
          <Text>HI There</Text>
          <BSALoginWebview />
        </View> */}
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={closeModal}>
              <View
                style={{
                  height: "15%",
                  backgroundColor: "rgba(52, 52, 52, alpha)",
                }}
              ></View>
            </TouchableOpacity>
            <View style={{ height: "90%" }}>
              <View style={styles.popupBar}>
                <MaterialIcons name="close" size={30} onPress={closeModal} />
                <View
                  style={{
                    marginHorizontal: 20,
                    justifyContent: "center",
                    alignContent: "center",
                    // borderWidth: 1,
                  }}
                >
                  <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    BSA Authentication
                  </Text>
                </View>
              </View>
              <BSALoginWebview />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "transparent",
  },
  modalContainer: {
    // backgroundColor: "white",
    width: "100%",

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // shadowOffset: { width: 2, height: 5 },
    // shadowColor: "black",
    // shadowOpacity: 1,
  },
  popupBar: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: "flex-start",
    alignContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#2196F3",
    height: "100%",
    width: "100%",
  },
  introductionContainer: {
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignContent: "center",
    // borderWidth: 2,
  },
  titleContainer: {
    // borderWidth: 2,
    marginBottom: 15,
  },
  titleText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitleContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignContent: "center",
    // borderWidth: 2,
  },
  subtitleText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  loginContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    // borderWidth: 2,
  },
  loginTitle: {
    paddingVertical: 30,
    alignContent: "center",
    justifyContent: "center",
  },
  loginTitleText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "#2b2d2f",
  },
  textInputContainer: {
    marginVertical: 5,
  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 20,

    padding: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#BDBDBD",
  },
  forgotPasswordContainer: {
    flexDirection: "row-reverse",
  },
  forgotPasswordText: {
    fontSize: 12,
    color: "gray",
    fontWeight: "500",
  },
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    marginTop: 15,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.7,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Login;
