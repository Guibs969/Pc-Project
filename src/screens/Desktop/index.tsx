import { api } from "../../services/api";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { NaviBar } from "../../components/NaviBar";

export function Desktop() {
  const [nome, setNome] = useState("");
  const [hardware, setHardware] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [disponibilidade, setDisponibilidade] = useState<"Sim" | "Não" | null>(null);

  const handleSave = () => {
    // Implementar lógica para salvar os dados
    console.log({ nome, hardware, localizacao, disponibilidade });
  };

  const handleCancel = () => {
    // Resetar os campos
    setNome("");
    setHardware("");
    setLocalizacao("");
    setDisponibilidade(null);
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
      <Text style={styles.text1}>Cadastrar Computador</Text>
        <View style={styles.modalContent}>

        <View style={styles.labelView}>
            <Text style={styles.label}>Código:</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Código do Computador"
            />
          </View>



          <View style={styles.labelView}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome do Computador"
            />
          </View>


          <View style={styles.labelView}>
            <Text style={styles.label}>Hardware:</Text>
            <TextInput
              style={styles.input}
              value={hardware}
              onChangeText={setHardware}
              placeholder="Hardware"
            />
          </View>


          <View style={styles.labelView}>
            <Text style={styles.label}>Marca:</Text>
            <TextInput
              style={styles.input}
              value={localizacao}
              onChangeText={setLocalizacao}
              placeholder="Marca"
            />
          </View>



          <View style={styles.labelView}>
            <Text style={styles.label}>Tipo:</Text>
            <TextInput
              style={styles.input}
              value={localizacao}
              onChangeText={setLocalizacao}
              placeholder="Tipo"
            />
          </View>


          <View style={styles.labelView}>
            <Text style={styles.label}>Data:</Text>
            <TextInput
              style={styles.input}
              value={localizacao}
              onChangeText={setLocalizacao}
              placeholder="Data da Aquisição"
            />
          </View>


          <View style={styles.labelView}>
            <Text style={styles.label}>Valor:</Text>
            <TextInput
              style={styles.input}
              value={localizacao}
              onChangeText={setLocalizacao}
              placeholder="Valor"
            />
          </View>





          <View style={styles.labelView}>
            <Text style={styles.label}>Localização:</Text>
            <TextInput
              style={styles.input}
              value={localizacao}
              onChangeText={setLocalizacao}
              placeholder="Localização"
            />
          </View>

          <Text style={styles.labelDisp}>Disponibilidade</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttonSim}
              onPress={() => setDisponibilidade("Sim")}
            >
              <Text style={styles.buttonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonNao}
              onPress={() => setDisponibilidade("Não")}
            >
              <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonSaveCancel}>
            <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <NaviBar />
    </>
  );
}