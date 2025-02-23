import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import MapScreen from "../../../components/MapScreen";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import ProgressBBar from "../../../components/progressBar";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function CollectInfo(){
    const [disabled, setDisabled] = useState(false)
    const { id , type } = useLocalSearchParams();
    const [progressBar, setProgress] = useState(false)
    const [newCollects, setNewCollects] = useState([
        { id: '1', title: 'Plástico em Pici', description: 'Descrição da coleta 1', distance: '1.5 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg" },favorite: false },
        { id: '2', title: 'Metal em Parquelândia', description: 'Descrição da coleta 2', distance: '1.3 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Metal": "2kg" }, favorite: false },
        { id: '4', title: 'Coleta favoritada', description: 'Uma coleta que recebeu status de favorita por algum motivo', distance: '1.4 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg" }, favorite: true },
        { id: '3', title: 'Diversos em Castelão', description: 'Descrição da coleta 3', distance: '1.8 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg", "Metal": "12Kg"}, favorite: false }
    ]);
    
    const selectedCollect = newCollects.find(collect => collect.id === id);
    
    if (!selectedCollect) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#EEE" }}>
                <Text style={{ fontSize: 18, color: "#667799" }}>Coleta não encontrada</Text>
            </View>
        );
    }
    
    const [favorite, setFavorite] = useState(selectedCollect.favorite)

    return(
        <ScrollView style={{ flex: 1, backgroundColor: "#EEE" }}>
            {progressBar && <ProgressBBar route={"/collects/collects"}/>
            }
            <View style={{ display: 'flex', alignItems: "center", padding: 20 }}>
                
                <View style={{display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center', gap: 5}}>
                    <TouchableOpacity onPress={()=>{setFavorite(!favorite)}}>
                        {!favorite && <FontAwesome name="star-o" size={24} color="#667799" />}
                        {favorite && <FontAwesome name="star" size={24} color="#eedd00" />}
                    </TouchableOpacity>
                    <Text style={{ color: "#667799", fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
                        {selectedCollect.title}
                    </Text>
                </View>

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
                {type=='add' &&
                    <TouchableOpacity disabled={disabled} onPress={()=>{setProgress(true); setDisabled(true)}} style={{backgroundColor: '#667799', padding: 20, borderRadius: 6, margin: 40}}>
                        <Text style={{color: 'white'}}>
                            <AntDesign name="plus" size={14} color="white" />
                            Adicionar coleta
                        </Text>                    
                    </TouchableOpacity>
                }
                {type=='open' &&
                    <View>
                        <TouchableOpacity disabled={disabled} onPress={()=>{setProgress(true); setDisabled(true)}} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, backgroundColor: '#667799', padding: 20, borderRadius: 6, margin: 10}}>
                            <AntDesign name="check" size={14} color="white" />
                            <Text style={{color: 'white'}}>
                                Coleta finalizada
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={disabled} onPress={()=>{setProgress(true); setDisabled(true)}} style={{backgroundColor: '#995544', padding: 20, borderRadius: 6, margin: 10}}>
                            <Text style={{color: 'white'}}>
                                <AntDesign name="minus" size={14} color="white" />
                                Cancelar coleta
                            </Text>                    
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </ScrollView>
    );
}
