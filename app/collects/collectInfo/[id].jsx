import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MainHeader } from "../../../components/MainHeader";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MapScreen from "../../../components/MapScreen";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function CollectInfo(){
    const { id } = useLocalSearchParams();
    const [newCollects, setNewCollects] = useState([
        { id: '1', title: 'Plástico em Pici', description: 'Descrição da coleta 1', distance: '1.5 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg" } },
        { id: '2', title: 'Metal em Parquelândia', description: 'Descrição da coleta 2', distance: '1.3 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Metal": "2kg" } },
        { id: '3', title: 'Diversos em Castelão', description: 'Descrição da coleta 3', distance: '1.8 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg", "Metal": "12Kg"} }
    ]);
    
    const selectedCollect = newCollects.find(collect => collect.id === id);
    
    if (!selectedCollect) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#EEE" }}>
                <Text style={{ fontSize: 18, color: "#667799" }}>Coleta não encontrada</Text>
            </View>
        );
    }
    
    return(
        <ScrollView style={{ flex: 1, backgroundColor: "#EEE" }}>
            <View style={{ display: 'flex', alignItems: "center", padding: 20 }}>
                <Text style={{ color: "#667799", fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
                    {selectedCollect.title}
                </Text>
                <Text style={{ fontSize: 16, color: "#555", marginBottom: 10 }}>{selectedCollect.description}</Text>
                <Text style={{ fontSize: 14, color: "#777", marginBottom: 20 }}>Distância: {selectedCollect.distance}</Text>
                
                <View style={{ display: 'flex', width: '80%', margin: 10 }}>
                    {Object.entries(selectedCollect.collects).map(([material, peso], index) => (
                        <View key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#667799" }}>{material}</Text>
                            <Text style={{ fontSize: 14, color: "#555" }}>Peso: {peso}</Text>
                        </View>
                    ))}
                </View>
                
                <MapScreen locations={selectedCollect.locations} />
            </View>
        </ScrollView>
    );
}
