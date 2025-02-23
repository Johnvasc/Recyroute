import { View, Dimensions, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MainHeader } from '../../components/MainHeader';
import { useState } from "react";
import { useFonts } from "expo-font";
import { Saira_400Regular, Saira_500Medium, Saira_700Bold } from "@expo-google-fonts/saira";
import { FAB } from "react-native-paper";
import { useRouter } from "expo-router";

import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Waste(){
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState("novos");
    const [openCollects, setOpenCollects] = useState([
        { key: '1', title: 'Coleta 1', description: 'Descrição da coleta 1', distance: 'há 3m' },
        { key: '2', title: 'Coleta 2', description: 'Descrição da coleta 2', distance: 'há 4h' },
        { key: '3', title: 'Coleta 3', description: 'Descrição da coleta 3', distance: 'há 5d' }
    ]);
    const [late, setLate] = useState([
        { key: '1', title: 'Plástico em Pici', description: 'Descrição da coleta 1', distance: '7d', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg" } },
        { key: '2', title: 'Metal em Parquelândia', description: 'Descrição da coleta 2', distance: 'há 1M2d', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Metal": "2kg" } },
        { key: '3', title: 'Diversos em Castelão', description: 'Descrição da coleta 3', distance: 'há 1a', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg", "Metal": "12Kg"} }
    ]);

    const [fontsLoaded] = useFonts({
        Saira_Regular: Saira_400Regular,
        Saira_Medium: Saira_500Medium,
        Saira_Bold: Saira_700Bold,
    });

    if(!fontsLoaded){
        return null;
    }

    const tabs = [
        { key: "aberto", label: "Em aberto", icon: <Entypo name="folder" size={16} /> },
        { key: "atrasados", label: "Atrasados", icon: <MaterialIcons name="watch-later" size={16} /> },
        { key: "fechados", label: "Arquivados", icon: <Entypo name="archive" size={16} /> }
    ];

    return (
        <View style={styles.container}>
            <MainHeader username='john' loc='Castelão' profilePic='https://picsum.photos/80' />
            <View style={styles.navContainer}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab.key}
                        style={styles.navButton}
                        onPress={() => setSelectedTab(tab.key)}
                    >
                        {tab.icon && (
                            <tab.icon.type
                                name={tab.icon.props.name}
                                size={20}
                                color={selectedTab === tab.key ? "#667799" : "#999"}
                            />
                        )}
                        <Text style={[styles.navText, selectedTab === tab.key && styles.navTextActive]}>
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            
            {selectedTab === 'aberto' && (
                <View>
                    {openCollects.map((collect) => (
                        <TouchableOpacity
                        onPress={() => router.push(`/collects/collectInfo/${collect.key}`)}
                        key={collect.key}
                        style={{ height: 84, width: 360, backgroundColor: 'white', marginBottom: 10, padding: 15 }}>
                            <Text style={{ fontFamily: 'Saira_Medium', fontSize: 14 }}>
                                {collect.title}
                            </Text>
                            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{ fontFamily: 'Saira_Regular', fontSize: 12, color: '#777' }}>
                                    {collect.description}
                                </Text>
                                <Text style={{ fontFamily: 'Saira_Regular', fontSize: 12, color: '#777' }}>
                                    {collect.distance}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    ))}
                </View>
            )}



        {selectedTab === 'atrasados' && (
                <View>
                    {late.map((collect) => (
                        <TouchableOpacity 
                        onPress={() => router.push(`/collects/collectInfo/${collect.key}`)}
                        key={collect.key} 
                        style={{ height: 80, width: 360, backgroundColor: 'white', marginBottom: 10, padding: 15 }}
                        >
                        <Text style={{ fontFamily: 'Saira_Medium', fontSize: 14 }}>
                            {collect.title}
                        </Text>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{ fontFamily: 'Saira_Regular', fontSize: 12, color: '#777' }}>
                                {collect.description}
                            </Text>
                            <Text style={{ fontFamily: 'Saira_Regular', fontSize: 12, color: '#777' }}>
                                {collect.distance}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    ))}
                </View>
            )}
            <FAB
            icon="plus"
            color="white"
            style={styles.fab}
            onPress={() => router.push("/collects/addCollect")}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        height: Dimensions.get("window").height,
        width: '100%',
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',

    },
    navButton: {
        alignItems: 'center',
        paddingVertical: 50,
        paddingHorizontal: 15,
        zIndex: 10,
    },
    navText: {
        fontSize: 14,
        color: "#999",
        fontFamily: "Saira_Medium",
    },
    navTextActive: {
        color: "#667799",
    },
    fab: {
        position: "absolute",
        right: 20,
        bottom: 100,
        backgroundColor: "#667799",
        color: 'white'
    },
});
