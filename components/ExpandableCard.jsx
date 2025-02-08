import { useState } from "react";
import { View, Text, TouchableOpacity, Animated, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ExpandableCard({ title }) {
  const [expanded, setExpanded] = useState(false);
  const animation = useState(new Animated.Value(0))[0];
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isEditable, setIsEditable] = useState(true);

  const toggleExpand = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const handleSaveOrEdit = () => {
    if (isEditable) {
      setIsEditable(false);
      toggleExpand();
    } else {
      setIsEditable(true);
      setExpanded(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  return (
    <View style={{ margin: 20, borderRadius: 10, backgroundColor: "#FFF", elevation: 4, padding: 10 }}>
      <TouchableOpacity onPress={toggleExpand} style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 16, color: "#679", fontWeight: "bold", flex: 1 }}>{title}</Text>
        <AntDesign name={expanded ? "up" : "down"} size={16} color="#679" />
      </TouchableOpacity>

      <Animated.View style={{ overflow: "hidden", height: heightInterpolate, paddingVertical: 10 }}>
        <View style={{ borderWidth: 1, borderColor: "#EEE", borderRadius: 5, marginBottom: 10 }}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
            enabled={isEditable}
            style={{ height: 50 }}
          >
            <Picker.Item label="Opção 1" value="op1" />
            <Picker.Item label="Opção 2" value="op2" />
            <Picker.Item label="Opção 3" value="op3" />
          </Picker>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
          <TextInput
            placeholder="Peso unitário"
            value={text}
            onChangeText={setText}
            editable={isEditable}
            style={{
              height: 40,
              width: "48%",
              borderColor: "#EEE",
              borderWidth: 1,
              paddingHorizontal: 10,
              borderRadius: 5,
              backgroundColor: isEditable ? "white" : "#f5f5f5",
            }}
          />

          <View style={{ borderWidth: 1, borderColor: "#EEE", borderRadius: 5, width: "48%" }}>
            <Picker
              selectedValue={quantity}
              onValueChange={setQuantity}
              enabled={isEditable}
              style={{ height: 50 }}
            >
              {[...Array(9)].map((_, i) => (
                <Picker.Item key={i + 1} label={`${i + 1}`} value={`${i + 1}`} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity onPress={handleSaveOrEdit} style={{ backgroundColor: "#679", padding: 10, borderRadius: 5, alignItems: "center", width: "40%" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>{isEditable ? "Salvar" : "Editar"}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
