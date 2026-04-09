import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems:"center",
    justifyContent: "center",
  },

  image: {
    width:250,
  },

  formContainer:{
    width:"100%",
    height:"80%",
    justifyContent:"center",
    padding: 20,
    paddingTop:80,
    columnGap:1
  },

  input:{
    borderWidth:1,
    borderColor:"#E5BF3C",
    padding: 12,
    borderRadius: 10,
    color:"white",
    width:"80%",
    alignSelf:"center",
  },

  label:{
    color:"#ccc",
    marginBottom: 6,
    fontSize:14,
    width: "80%",       
    alignSelf: "center",   
    },

    imageContainer:{
      flex:1,
      justifyContent:"center"
    },

    buttonContainer: {
      marginBottom:120,
    }
});