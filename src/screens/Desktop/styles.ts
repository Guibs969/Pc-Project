import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Container principal da tela
  screenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 45,
    backgroundColor: "#fff",
  },

  // Título principal da tela
  titleText: {
    position: "absolute",
    top: 5,
    color: "#1351B4",
    fontSize: 24,
  },

  // Texto dos botões
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },

  // Fundo do formulário
  formBackground: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },

  // View para os rótulos e inputs
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  // Estilo dos rótulos
  inputLabel: {
    fontWeight: "bold",
    paddingBottom: 10,
    fontSize: 16,
    marginBottom: 5,
  },

  // Estilo dos campos de entrada
  textInput: {
    width: "60%",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },

  // Botão "Não" para disponibilidade
  buttonNo: {
    padding: 15,
    paddingHorizontal: 30,
    backgroundColor: "#29292E",
    borderRadius: 15,
    alignItems: "center",
  },

  // Botão "Sim" para disponibilidade
  buttonYes: {
    padding: 15,
    paddingHorizontal: 30,
    backgroundColor: "#29292E",
    borderRadius: 15,
    alignItems: "center",
  },

  // Botões de salvar e cancelar
  saveCancelButtons: {
    paddingTop: 45,
    flexDirection: "row",
    gap: 10,
  },

  // Botão de salvar
  saveButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1351B4",
    padding: 15,
    borderRadius: 25,
    width: 200,
  },

  // Botão de cancelar
  cancelButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1351B4",
    padding: 15,
    borderRadius: 25,
    width: 200,
  },

  // Botões de disponibilidade
  availabilityButtons: {
    flexDirection: "row",
    gap: 10, // Espaçamento entre os botões
  },

  // Rótulo para disponibilidade
  availabilityLabel: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 16,
  },

  // Botão "Sim" selecionado
  buttonYesSelected: {
    backgroundColor: "#4CAF50",
  },

  // Botão "Não" selecionado
  buttonNoSelected: {
    backgroundColor: "#FF0000",
  },
});