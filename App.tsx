import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as sdk from "matrix-js-sdk";
import React from "react";
import TextEncodingPolyfill from "text-encoding";

Object.assign(global, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});

async function testMatrix() {
  console.log("===============1111111112111");

  const myUserId = "@coffey11:hashi.sbs";
  const myAccessToken = "QGV4YW1wbGU6bG9jYWxob3N0.qPEvLuYfNBjxikiCjP";
  const matrixClient = sdk.createClient({
    // baseUrl: "https://matrix-client.matrix.org",
    baseUrl: "https://hashi.sbs",
    // accessToken: myAccessToken,
    // userId: myUserId,
  });

  // console.log("====createRoom====", room_id);
  //coffey11 PZjSAyRhBc8jCqp

  const loginRes = await matrixClient.loginWithPassword(
    "coffey11",
    "PZjSAyRhBc8jCqp"
  );
  console.log("======loginRes:", loginRes);
  const rooms = await matrixClient.publicRooms();
  console.log("rooms :", rooms);
}

export default function App() {
  useEffect(() => {
    testMatrix();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
