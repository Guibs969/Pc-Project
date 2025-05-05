import React from "react";
import {styles} from "./styles";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1351B4" />
    </View>
  );
}

