import { api } from "../../services/api";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { NaviBar } from "../../components/NaviBar";

export function Desktop() {
  const [codigo_computador, setCodigoComputador] = useState("");
  const [nome_computador, setNomeComputador] = useState("");
  const [modelo_computador, setModeloComputador] = useState(""); // Modelo é o Hardware
  const [marca_computador, setMarcaComputador] = useState("");
  const [tipo_computador, setTipoComputador] = useState("");
  const [data_aquisicao, setDataAquisicao] = useState("");
  const [valor_aquisicao, setValorAquisicao] = useState<number | "">(""); 
  const [localizacao, setLocalizacao] = useState("");
  const [disponibilidade, setDisponibilidade] = useState<boolean | null>(null); 

  const handleSave = async () => {
    try {
      if (
        !nome_computador ||
        !modelo_computador ||
        !localizacao ||
        disponibilidade === null ||
        valor_aquisicao === ""
      ) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const data = {
        codigo_computador,
        nome_computador,
        modelo_computador,
        marca_computador,
        tipo_computador,
        data_aquisicao,
        valor_aquisicao,
        disponibilidade,
        localizacao,
      };

      console.log(data);

      // Envia os dados para a API
      const response = await api.post("/pcs/cadastrar", data);

      if (response.status === 201) {
        alert("Computador cadastrado com sucesso!");
        handleCancel(); // Limpa os campos após o cadastro
      } else {
        alert("Erro ao cadastrar o computador.");
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Ocorreu um erro ao tentar salvar os dados.");
    }
  };

  const handleCancel = () => {
    setCodigoComputador("");
    setNomeComputador("");
    setModeloComputador("");
    setMarcaComputador("");
    setTipoComputador("");
    setDataAquisicao("");
    setValorAquisicao("");
    setLocalizacao("");
    setDisponibilidade(null);
  };

  return (
    <>
      <Header />
      <View style={styles.screenContainer}>
        <Text style={styles.titleText}>Cadastrar Computador</Text>
        <View style={styles.formBackground}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Código:</Text>
            <TextInput
              style={styles.textInput}
              value={codigo_computador}
              onChangeText={setCodigoComputador}
              placeholder="Código do Computador"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nome:</Text>
            <TextInput
              style={styles.textInput}
              value={nome_computador}
              onChangeText={setNomeComputador}
              placeholder="Nome do Computador"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Hardware:</Text>
            <TextInput
              style={styles.textInput}
              value={modelo_computador}
              onChangeText={setModeloComputador}
              placeholder="Hardware"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Marca:</Text>
            <TextInput
              style={styles.textInput}
              value={marca_computador}
              onChangeText={setMarcaComputador}
              placeholder="Marca"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Tipo:</Text>
            <TextInput
              style={styles.textInput}
              value={tipo_computador}
              onChangeText={setTipoComputador}
              placeholder="Tipo"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Data:</Text>
            <TextInput
              style={styles.textInput}
              value={data_aquisicao}
              onChangeText={setDataAquisicao}
              placeholder="Data da Aquisição"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Valor:</Text>
            <TextInput
              style={styles.textInput}
              value={valor_aquisicao.toString()}
              onChangeText={(value) => setValorAquisicao(value === "" ? "" : parseInt(value, 10))}
              placeholder="Valor"
              keyboardType="numeric" // Apenas números
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Localização:</Text>
            <TextInput
              style={styles.textInput}
              value={localizacao}
              onChangeText={setLocalizacao}
              placeholder="Localização"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.availabilityLabel}>Disponibilidade:</Text>
            <View style={styles.availabilityButtons}>
              <TouchableOpacity
                style={[
                  styles.buttonYes,
                  disponibilidade === true && styles.buttonYesSelected,
                ]}
                onPress={() => setDisponibilidade(true)}
              >
                <Text style={styles.buttonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonNo,
                  disponibilidade === false && styles.buttonNoSelected,
                ]}
                onPress={() => setDisponibilidade(false)}
              >
                <Text style={styles.buttonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.saveCancelButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <NaviBar />
    </>
  );
}