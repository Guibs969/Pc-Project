import { api } from "../../services/api";
import { Loading } from '../../components/Loading';
import React, { useEffect, useState } from "react";
import { Text, View} from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { NaviBar } from "../../components/NaviBar";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";


interface Computador {
  id: number;
  codigo_computador: string;
  nome_computador: string;
  modelo_computador: string;
  marca_computador: string;
  tipo_compuador: string;
  data_aquisicao: string;
  valor_aquisicao: number;
  disponibilade: boolean;
  localizacao: string;
}

export function Detalhes() {
  const route = useRoute();
  const { id } = route.params as { id: number }; 
  const [computador, setComputador] = useState<Computador | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function consultarPc() {
      try {
        const response = await api.get(`/pcs/consultar/${id}`);
        console.log("Resposta completa da API:", response);
        setComputador(response.data);
      } catch (error) {
        console.error("Erro", error);
      } finally {
        setIsLoading(false);
      }
    }

    consultarPc();
  }, [id]);

  return (
    <>
      <Header />
      <View style={styles.container}>  
        {isLoading ? (
          <Loading />
        ) : computador ? (
            <View style={styles.card}>
              <Text style={styles.text}>Nome: {computador.nome_computador}</Text>
              <Text style={styles.text}>Modelo: {computador.modelo_computador}</Text>
              <Text style={styles.text}>Marca: {computador.marca_computador}</Text>
              <Text style={styles.text}>Tipo: {computador.tipo_compuador}</Text>
              <Text style={styles.text}>Data de Aquisição: {computador.data_aquisicao}</Text>
              <Text style={styles.text}>Valor de Aquisição: R$ {computador.valor_aquisicao}</Text>
              <Text style={styles.text}>Disponibilidade: {computador.disponibilade}</Text>
            <Text style={styles.text}>Localização: {computador.localizacao}</Text>
        </View>
        ) : (
          <Text>Computador não encontrado.</Text>
        )}
      </View>
      <NaviBar />
    </>
  );
}