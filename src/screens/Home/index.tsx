import { api } from "@/src/services/api";
import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { NaviBar } from "../../components/NaviBar";
import { PcCard } from "@/src/components/PcCard";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();
  const [computers, setComputers] = useState([]); 

  
  useEffect(() => {
    async function fetchComputers() {
      try {
        const response = await api.get("http://192.168.1.11:7080/api/pcs/listar");
        console.log("Resposta da API:", response.data.data); 
        setComputers(response.data.data); 
      } catch (error) {
        console.error("Erro ao buscar os computadores:", error);
      }
    }
  
    fetchComputers();
  }, []);

  function handlePc() {
    navigation.navigate("Login");
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}> Computadores - MEC </Text>

        <FlatList
  style={styles.list}
  data={computers} // Dados atualizados
  keyExtractor={(item) => item.id.toString()} // Certifique-se de que "id" é único
  renderItem={({ item }) => (
    <PcCard
      title={item.nome_computador} // Nome do computador como título
      description={`${item.modelo_computador} - ${item.marca_computador} - ${item.localizacao}`} // Descrição formatada
      onPress={handlePc} // Função ao clicar no card
    />
  )}
/>
      </View>
      <NaviBar />
    </>
  );
}