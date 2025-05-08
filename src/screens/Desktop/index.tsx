import { api } from "../../services/api";
import React, { useEffect, useState } from "react";
import { Text, View} from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { NaviBar } from "../../components/NaviBar";




export function Desktop() {






  return (
    <>
      <Header />
        <View style={styles.container}>
        <Text style={styles.text}> Desktop - Criação </Text>










      </View>
      <NaviBar />
    </>
  );
}