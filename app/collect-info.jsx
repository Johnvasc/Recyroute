import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MainHeader } from "../components/MainHeader";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MapScreen from "../components/MapScreen";

export default function CollectInfo({ id }) {
    const coletas = {
        "Plástico": "2Kg",
        "Material eletrônico": "13Kg",
        "Material orgânico": "2Kg"
    };
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#EEE" }}>
        <View style={{ display: 'flex', alignItems: "center", padding: 20 }}>
            <MainHeader username="John Vasconcelos" loc="Castelão" profilePic="https://picsum.photos/80" />

            <Text style={{ color: "#667799", fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
                Minha coleta
            </Text>
            <View style={{display: 'flex', width: '80%', margin: 10}}>
                {Object.entries(coletas).map(([material, peso], index) => (
                <View key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#667799"}}>{material}</Text>
                    <Text style={{ fontSize: 14, color: "#555" }}>Peso: {peso}</Text>
                </View>
                ))}
            </View>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#667799"}}>
                17Kg
            </Text>

            <Text style={{color: 'black'}}>
                Olá mundo
            </Text>

            <MapScreen></MapScreen>

            <Text style={{color: 'black'}}>
                Olá mundo 2
            </Text>


            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome6 name="location-dot" size={24} color="#667799" />
                <Text style={{ fontSize: 14, color: "#667799", margin: 10}}>
                    Pici, Fortaleza-CE
                </Text>
            </View>
        </View>
        </ScrollView>
    );
}

