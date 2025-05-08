import { api } from "../../services/api";
import { Loading } from '../../components/Loading';
import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { NaviBar } from "../../components/NaviBar";
import { PcCard } from "@/src/components/PcCard";
import { useNavigation } from "@react-navigation/native";

interface Computador {
  id: number;
  nome_computador: string;
  modelo_computador: string;
  marca_computador: string;
  localizacao: string;
}

export function Home() {
  const navigation = useNavigation();
  const [computadores, setComputadores] = useState<Computador[]>([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    async function fetchComputadores() {
      try {
        const response = await api.get("/pcs/listar");
        console.log("Resposta completa da API:", response);
        setComputadores(response.data.data);
      } catch (error) {
        console.error("Erro", error);
      } finally {
        setIsLoading(false); 
      }
    }

    fetchComputadores();
  }, []);

  function handlePc(id: number) {
    navigation.navigate("Detalhes", { id });
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}> Computadores - MEC </Text>
        {isLoading ? ( 
          <Loading />
        ) : (
          <FlatList
            style={styles.list}
            data={computadores || []}
            keyExtractor={(item) => item.id?.toString()}
            renderItem={({ item }) => (
              <PcCard
                title={item?.nome_computador || "Nome não disponível"}
                description={`${item?.modelo_computador || "Modelo desconhecido"} - ${item?.marca_computador || "Marca desconhecida"} - ${item?.localizacao || "Localização desconhecida"}`}
                onPress={() => handlePc(item.id)}
              />
            )}
          />
        )}
      </View>
      <NaviBar />
    </>
  );
}