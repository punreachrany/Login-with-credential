import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const BSALoginWebview = (props) => {
  return <WebView source={{ uri: "https://azlab.fnsvalue.co.kr/login" }} />;
};

export default BSALoginWebview;
