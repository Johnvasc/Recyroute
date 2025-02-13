import { useState } from "react";
import { useRouter } from "expo-router";
import { View, TouchableOpacity, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MainHeader } from "../components/MainHeader";
import ExpandableCard from "../components/ExpandableCard";

export default function AddCollect(){
  const router = useRouter(); // Hook para navegação
  const [title, setTitle] = useState("")
  const [collect, setCollect] = useState("Nova Coleta");
  const [collects, setCollects] = useState([{}]);

  const addNewCollect = () => {
    const newId = collects.length + 1;
    setCollects([...collects, { id: newId, title: `Coleta ${newId}` }]);
  };

  const handleCollect = async () => {
    router.push("/login");
    try {
      const response = await fetch("http://192.168.0.16:8080/newCollect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ collects }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Sucesso!", "Coleta enviada com sucesso.");
        router.push("/login");
      } else {
        Alert.alert("Erro", data.message || "Falha ao enviar a coleta.");
      }
    } catch (error) {
      Alert.alert("Erro", "Falha na conexão com o servidor.");
      console.error(error);
    }
  };

  const handleCardChange = (id, updatedData) => {
    setCollects((prevCollects) =>
      prevCollects.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };
 


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollViewContent}
      >
        <MainHeader />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {collect}
          </Text>
          <TouchableOpacity>
            <AntDesign name="edit" size={24} color="#667799" />
          </TouchableOpacity>
        </View>

        {collects.map((item) => (
          <ExpandableCard onChange={(data) => handleCardChange(item.id, data)} key={item.id} title={item.title} />
        ))}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={addNewCollect}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>
              Adicionar Materiais
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} onPress={handleCollect} style={[styles.addButton, { backgroundColor: "#679" }]}>
            <Text style={[styles.addButtonText, { color: "white" }]}>Salvar coletas</Text>
          </TouchableOpacity>

        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    margin: 3,
    backgroundColor: "#EEE",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  titleText: {
    color: "#667799",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 210,
    gap: 15
  },
  addButton: {
    backgroundColor: "white",
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 5,
    elevation: 2,
  },
  addButtonText: {
    color: "gray",
    fontWeight: "bold",
  },
});