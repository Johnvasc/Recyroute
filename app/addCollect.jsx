import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MainHeader } from "../components/MainHeader";
import ExpandableCard from "../components/ExpandableCard";

export default function AddCollect() {
  const [collect, setCollect] = useState("Nova Coleta");
  const [collects, setCollects] = useState([{ id: 1, title: "Coleta 1" }]);

  const addNewCollect = () => {
    const newId = collects.length + 1;
    setCollects([...collects, { id: newId, title: `Coleta ${newId}` }]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#EEE" }}>
      <MainHeader />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "#667799",
            fontSize: 20,
            fontWeight: "bold",
            margin: 10,
          }}
        >
          {collect}
        </Text>
        <TouchableOpacity>
          <AntDesign name="edit" size={24} color="#667799" />
        </TouchableOpacity>
      </View>

      {collects.map((item) => (
        <ExpandableCard key={item.id} title={item.title} />
      ))}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={addNewCollect}
          style={{
            backgroundColor: "white",
            padding: 20,
            paddingLeft: 50,
            paddingRight: 50,
            borderRadius: 5,
            elevation: 2,
          }}
        >
          <Text style={{ color: "gray", fontWeight: "bold" }}>
            Adicionar coleta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
