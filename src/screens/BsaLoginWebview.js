import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { WebView } from "react-native-webview";

const BSALoginWebview = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="gray" size="large" />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <WebView
        // Loading URL
        source={{ uri: "https://azlab.fnsvalue.co.kr/login" }}
        style={{ flex: 1 }}
        // Enable Javascript Support
        javaScriptEnabled={true}
        // For the Cache
        domStorageEnabled={true}
        onLoadStart={(syntheticEvent) => {
          setIsLoading(true);
        }}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
      {isLoading ? <ActivityIndicatorElement /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicatorStyle: {
    flex: 1,
    position: "absolute",
    margin: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
});

export default BSALoginWebview;
