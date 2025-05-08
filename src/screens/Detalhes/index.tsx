import React, { useEffect, useState } from "react";
import { Modal, Text, View, TouchableOpacity, TextInput,  Button} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { NaviBar } from "../../components/NaviBar";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Loading } from '../../components/Loading';



interface Computador {
  id: number;
  codigo_computador: string;
  nome_computador: string;
  modelo_computador: string;
  marca_computador: string;
  tipo_compuador: string;
  data_aquisicao: string;
  valor_aquisicao: number;
  disponibilidade: boolean;
  localizacao: string;
}


export function Detalhes() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as { id: number }; 

  const[isEditModalVisible, setIsEditModalVisible] = useState(false);
  const[editedComputador, setEditedComputador] = useState<Computador | null>(null);
  const [disponibilidade, setDisponibilidade] = useState<boolean | null>(null);
  const [computador, setComputador] = useState<Computador | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  // Função para consultar o pc selecionado na home 
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

  // Função para deletar o pc e voltar para home após o feito
  async function deletaPc() {
    try {
      const response = await api.delete(`/pcs/deletar/${id}`);
      console.log("Resposta completa da API:", response);
      setComputador(response.data);
    } catch (error) {
      console.error("Erro ao deletar o PC", error);
  } finally{
    navigation.navigate('Home');
  }
}
  // Função para abrir o modal e preencher os dados
  function abrirModalEdicao() {
    setEditedComputador(computador); 
    setIsEditModalVisible(true);
    setDisponibilidade(computador?.disponibilidade || null);
  }
  // Função para salvar as alterações de Edit
  async function salvarEdicao() {
    if (!editedComputador) return;
  
    try {
      const computadorAtualizado = { ...editedComputador, disponibilidade };
  
      const response = await api.put(`/pcs/atualizar/${id}`, computadorAtualizado);
      console.log("Resposta da API ao atualizar:", response);
  
      setComputador(response.data); 
      setIsEditModalVisible(false); 
    } catch (error) {
      console.error("Erro ao atualizar o PC", error);
    } finally{
      navigation.navigate('Home');
    }
  }
  function alterarDisponibilidade(valor: boolean) {
    setDisponibilidade(valor);
    setEditedComputador((prev) => {
      if (!prev) return null;
      return { ...prev, disponibilidade: valor };
    });
  }

  return (
    <>
      <Header />
      <View style={styles.container}>  
        <Text style={styles.text1}> Computador </Text>
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
              <Text style={styles.text}>Disponibilidade: {computador.disponibilidade ?"Sim" : "Não" }</Text>
            <Text style={styles.text}>Localização: {computador.localizacao}</Text>
            <View style={styles.buttonDiv}>
              <TouchableOpacity style={styles.buttonEdit} onPress={abrirModalEdicao}>
                <Icon name="edit" size={20} color="#FFFFFF" />
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonDelete} onPress={deletaPc} >
                <Icon2 name="delete" size={20} color="#FFFFFF" />
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
          </View>
            </View>
        ) : (
          <Text>Computador não encontrado.</Text>
        )}
      </View>


     <Modal visible={isEditModalVisible} animationType="slide" transparent>
     <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Editar Computador</Text>
      <View style={styles.labelView}> 
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={editedComputador?.nome_computador}
          onChangeText={(text) =>
            setEditedComputador((prev) => {
              if (!prev) return null;
              return { ...prev, nome_computador: text };
            })
          }
          placeholder="Nome do Computador"
        />
        </View>


        <View style={styles.labelView}> 
    <Text style={styles.label}>Hardware:</Text>
        <TextInput
          style={styles.input}
          value={editedComputador?.modelo_computador}
          onChangeText={(text) =>
            setEditedComputador((prev) => {
              if (!prev) return null;
              return { ...prev, modelo_computador: text };
            })
          }
          placeholder="Hardware"
        />
        </View>



      <View style={styles.labelView}> 
        <Text style={styles.label}>Localização:</Text>
        <TextInput
          style={styles.input}
          value={editedComputador?.localizacao}
          onChangeText={(text) =>
            setEditedComputador((prev) => {
              if (!prev) return null;
              return { ...prev, localizacao: text };
            })
          }
          placeholder="Localização"
        />
        </View>

       
        <Text style={styles.labelDisp}>Disponibilidade</Text>
        <View style={styles.buttonGroup}> 
        <TouchableOpacity
          style={[
            styles.buttonSim,
            disponibilidade === true && styles.buttonSelectedSim, 
          ]}
          onPress={() => alterarDisponibilidade(true)}
        >
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
       style={[
       styles.buttonNao,
         disponibilidade === false && styles.buttonSelectedNao, 
           ]}
           onPress={() => alterarDisponibilidade(false)}
          >
        <Text style={styles.buttonText}>Não</Text>
        </TouchableOpacity>
     
      </View>
        <View   style ={styles.buttonSaveCancel} >
      <TouchableOpacity style={styles.buttonCancel} onPress={() => setIsEditModalVisible(false)}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSave} onPress={salvarEdicao}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      
        </View>
       </View>
       </View>
       </Modal>
      <NaviBar />
    </>
  );
}