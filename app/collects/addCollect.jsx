import { useState, useContext } from "react";
import { View, TouchableOpacity, Text, ScrollView, SafeAreaView, StyleSheet, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { MainHeader } from "../../components/MainHeader";
import GreatText from "../../components/GreateText";
import ExpandableCard from "../../components/ExpandableCard";
import Separator from "../../components/Separator";
import Feather from '@expo/vector-icons/Feather';
import ProgressBBar from "../../components/progressBar";
import { GlobalContext } from '../../contexts/GlobalContext';

export default function AddCollect() {
  const { adicionarItem } = useContext(GlobalContext);
  const [collect, setCollect] = useState("Nova Coleta");
  const [collects, setCollects] = useState([{ id: 0, title: `Resíduo` }]);
  const [localization, setLocalization] = useState(false);
  const [collectAdd, setCollectAdd] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [description, setDescription] = useState('');
  const [collectsData, setCollectsData] = useState({}); // Objeto para armazenar os pares chave-valor

  const handleCollect = () => {
    const newItem = {
      key: `${Date.now()}`,
      status: '2',
      title: collect,
      description: description,
      distance: '3.2km',
      locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }],
      collects: collectsData, // Passa o collectsData preenchido
      favorite: false
    };
    console.log(newItem)
    adicionarItem(newItem); // Adiciona ao globalData
    setCollectAdd(true); // Ativa a barra de progresso
  };

  const addNewCollect = () => {
    const newId = collects.length;
    setCollects([...collects, { id: newId, title: `Resíduo ${newId + 1}` }]);
  };

  const handleCardChange = (id, updatedData) => {
    const { material, weight, quantity } = updatedData;
    const calculatedWeight = `${(weight * quantity).toFixed(2)}kg`; // Calcula o peso total com 2 casas decimais
    setCollectsData((prev) => ({
      ...prev,
      [material]: calculatedWeight, // Adiciona ou atualiza o par chave-valor
    }));
    setCollects((prevCollects) =>
      prevCollects.map((item) =>
        item.id === id ? { ...item, material, weight: calculatedWeight } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {collectAdd && <ProgressBBar route={"/collects/waste"} />}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <MainHeader />
        <View style={styles.titleContainer}>
          {!editTitle && (
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.titleText}>{collect}</Text>
              <TouchableOpacity onPress={() => setEditTitle(true)}>
                <AntDesign name="edit" size={24} color="#667799" />
              </TouchableOpacity>
            </View>
          )}
          {editTitle && (
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <TextInput
                value={collect}
                onChangeText={setCollect}
                style={{ color: '#667799', fontSize: 20, fontWeight: 'bold' }}
              />
              <TouchableOpacity style={{ margin: 5 }} onPress={() => setEditTitle(false)}>
                <AntDesign name="check" size={24} color="#667799" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        {collects.map((item) => (
          <ExpandableCard
            onChange={(data) => handleCardChange(item.id, data)}
            key={item.id}
            title={item.title}
          />
        ))}

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={addNewCollect} style={styles.addButton}>
            <AntDesign name="plus" size={20} color="gray" />
            <Text style={styles.addButtonText}>Adicionar Resíduo</Text>
          </TouchableOpacity>

          <Separator />

          {!localization && (
            <TouchableOpacity onPress={() => setLocalization(true)} style={styles.addButton}>
              <EvilIcons name="location" size={20} color="gray" />
              <Text style={styles.addButtonText}>Localização</Text>
            </TouchableOpacity>
          )}

          {localization && (
            <View style={{ backgroundColor: '#DDD', paddingHorizontal: 50, paddingVertical: 15, borderRadius: 6 }}>
              <Feather name="check" size={24} color="green" />
            </View>
          )}

          <GreatText value={description} onChangeText={setDescription} />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleCollect}
            style={[styles.addButton, { backgroundColor: "#679" }]}
          >
            <Text style={[styles.addButtonText, { color: "white" }]}>Criar coleta</Text>
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
    gap: 15,
  },
  addButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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