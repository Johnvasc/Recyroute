import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import MapScreen from "../../../components/MapScreen";
import { useLocalSearchParams } from "expo-router";
import { useState, useContext } from "react";
import ProgressBBar from "../../../components/progressBar";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GlobalContext } from '../../../contexts/GlobalContext';

export default function CollectInfo(){
    const { globalData, atualizarItem } = useContext(GlobalContext);
    const [disabled, setDisabled] = useState(false);
    const { id , type } = useLocalSearchParams();
    const [progressBar, setProgress] = useState(false);
    
    const selectedCollect = globalData.find(collect => collect.key === id);
    
    if(!selectedCollect) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#EEE" }}>
                <Text style={{ fontSize: 18, color: "#667799" }}>Coleta não encontrada</Text>
            </View>
        );
    }
    
    const handleFavorite = (itemKey, newFavorite) => {
        const itemOriginal = globalData.find((item) => item.key === itemKey);
        const itemModificado = {
          ...itemOriginal,
          favorite: newFavorite,
        };
        console.log(globalData)
        atualizarItem(itemModificado); // Chama a função do contexto
    };
    const handleStatus = (itemKey, status) => {
        const itemOriginal = globalData.find((item) => item.key === itemKey);
        const itemModificado = {
          ...itemOriginal,
          status: status,
        };
        atualizarItem(itemModificado); // Chama a função do contexto
    };

    return(
        <ScrollView style={{backgroundColor: "#EEE", paddingBottom: 40}}>
            {progressBar && <ProgressBBar route={"/collects/collects"}/>
            }
            <View style={{ display: 'flex', alignItems: "center", padding: 20 }}>
                
                <View style={{display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center', gap: 5}}>
                    <TouchableOpacity onPress={()=>{handleFavorite(selectedCollect.key, !selectedCollect.favorite)}}>
                        {!selectedCollect.favorite && (selectedCollect.status=='1' || selectedCollect.status=='3') && <FontAwesome name="star-o" size={24} color="#667799" />}
                        {selectedCollect.favorite && (selectedCollect.status=='1' || selectedCollect.status=='3') && <FontAwesome name="star" size={24} color="#eedd00" />}
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
                {selectedCollect.status=='2' &&
                    <TouchableOpacity disabled={disabled} onPress={()=>{setProgress(true); setDisabled(true); handleStatus(selectedCollect.key, '1')}} style={{backgroundColor: '#667799', padding: 20, borderRadius: 6, margin: 40}}>
                        <Text style={{color: 'white'}}>
                            <AntDesign name="plus" size={14} color="white" />
                            Adicionar coleta
                        </Text>                    
                    </TouchableOpacity>
                }
                {(selectedCollect.status=='1' || selectedCollect.status=='3') &&
                    <View>
                        <TouchableOpacity disabled={disabled} onPress={()=>{setProgress(true); setDisabled(true); handleStatus(selectedCollect.key, '4')}} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, backgroundColor: '#667799', padding: 20, borderRadius: 6, margin: 10}}>
                            <AntDesign name="check" size={14} color="white" />
                            <Text style={{color: 'white'}}>
                                Coleta finalizada
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={disabled} onPress={()=>{setProgress(true); setDisabled(true); handleStatus(selectedCollect.key, '2')}} style={{backgroundColor: '#995544', padding: 20, borderRadius: 6, margin: 10}}>
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
