import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 45,
  },
  card: {
    backgroundColor: "#1F1F23",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: "95%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text:{
    color:"white",
    fontSize:20,
  },
  buttonDiv: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonEdit: {
    flexDirection: "row",
    backgroundColor: "#007BFF", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    gap: 10, 
  },
  buttonDelete: {
    flexDirection: "row",
    backgroundColor: "#DC3545", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    gap: 10, 
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContent: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  
  modalTitle: {
    fontSize: 22.5,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  labelView:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    width:'100%',
  },
  label: {
    fontWeight:'bold',
    paddingBottom:10,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width:'60%',
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },

  buttonGroup: {
    flexDirection: "row",
    justifyContent:'center',
    gap:15,
  
  },
  
  buttonNao: {
    padding:15,
    paddingHorizontal: 30,
    backgroundColor: "#29292E", 
    borderRadius: 15,
    alignItems: "center",
  },
  buttonSim: {
    padding:15,
    paddingHorizontal: 30,
    backgroundColor: "#29292E",
    borderRadius: 15,
    alignItems: "center",
  },
  
  buttonSaveCancel: {
    paddingTop:70,
    flexDirection: "row",
    gap:10,
  },
  
  buttonSave: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#1351B4", 
    padding: 15,
    borderRadius: 25,
    width:200,
  },
  
  buttonCancel: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#1351B4", 
    padding: 15,
    borderRadius: 25,
    width:200,
  },
  labelDisp:{
    paddingTop:40,
    textAlign:'center',
    fontWeight:'bold',
    paddingBottom:10,
    fontSize: 16,
    marginBottom: 5,


  },
  buttonSelectedSim: {
    backgroundColor: "#4CAF50", 
  },
  
  buttonSelectedNao: {
    backgroundColor: "#FF0000", 
  },


});