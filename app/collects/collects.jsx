import { View, Dimensions, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { MainHeader } from '../../components/MainHeader';
import { useState, useContext } from "react";
import { useFonts } from "expo-font";
import { Saira_400Regular, Saira_500Medium, Saira_700Bold } from "@expo-google-fonts/saira";

import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from "expo-router";
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Collects(){
    const [selectedTab, setSelectedTab] = useState("novos");
    const { globalData } = useContext(GlobalContext);
    const [openCollects, setOpenCollects] = useState(globalData.filter(item => item.status == '1'));
    const [newCollects, setNewCollects] = useState(globalData.filter(item => item.status == '2'));
    const [lateCollects, setLate] = useState(globalData.filter(item => item.status == '3'));
    const [archived, setArchived] = useState(globalData.filter(item => item.status == '4'));

    const [fontsLoaded] = useFonts({
        Saira_Regular: Saira_400Regular,
        Saira_Medium: Saira_500Medium,
        Saira_Bold: Saira_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    const tabs = [
        { key: "novos", label: "Novos", icon: <Entypo name="new" size={16} /> },
        { key: "aberto", label: "Em aberto", icon: <Entypo name="folder" size={16} /> },
        { key: "atrasados", label: "Atrasados", icon: <MaterialIcons name="watch-later" size={16} /> },
        { key: "arquivados", label: "Arquivados", icon: <Entypo name="archive" size={16} /> }
    ];

    return (
        <View>
        <ScrollView style={{paddingBottom: 80}}>
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
                <View style={{display: 'flex', alignItems: 'center'}}>
                    {openCollects.map((collect) => (
                        <TouchableOpacity
                        onPress={() => router.push(`/collects/collectInfo/${collect.key}?type=open`)}
                        key={collect.key}
                        style={{ height: 84, width: 360, backgroundColor: 'white', marginBottom: 10, padding: 15}}>
                            <View style={{display: 'flex', flexDirection: "row", alignItems: 'center', gap: 5}}>
                                {collect.favorite && <FontAwesome name="star" size={12} color="#eedd00" />}
                                <Text style={{ fontFamily: 'Saira_Medium', fontSize: 14 }}>
                                    {collect.title}
                                </Text>
                            </View>

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
            {selectedTab === 'novos' && (
                <View style={{display: 'flex', alignItems: 'center'}}>
                    {newCollects.map((collect) => (
                        <TouchableOpacity 
                        onPress={() => router.push(`/collects/collectInfo/${collect.key}?type=add`)}
                        key={collect.key} 
                        style={{ height: 80, width: 360, backgroundColor: 'white', marginBottom: 10, padding: 15 }}
                        >
                        <View style={{display: 'flex', flexDirection: "row", alignItems: 'center', gap: 5}}>
                            {collect.favorite && <FontAwesome name="star" size={12} color="#eedd00" />}
                            <Text style={{ fontFamily: 'Saira_Medium', fontSize: 14 }}>
                                {collect.title}
                            </Text>
                        </View>
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
                <View style={{display: 'flex', alignItems: 'center'}}>
                    {lateCollects.map((collect) => (
                        <TouchableOpacity 
                        onPress={() => router.push(`/collects/collectInfo/${collect.key}?type=add`)}
                        key={collect.key} 
                        style={{ height: 80, width: 360, backgroundColor: 'white', marginBottom: 10, padding: 15 }}
                        >
                        <View style={{display: 'flex', flexDirection: "row", alignItems: 'center', gap: 5}}>
                            {collect.favorite && <FontAwesome name="star" size={12} color="#eedd00" />}
                            <Text style={{ fontFamily: 'Saira_Medium', fontSize: 14 }}>
                                {collect.title}
                            </Text>
                        </View>
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
            {selectedTab === 'arquivados' && (
                <View style={{display: 'flex', alignItems: 'center'}}>
                    {archived.map((collect) => (
                        <TouchableOpacity 
                        onPress={() => router.push(`/collects/collectInfo/${collect.key}`)}
                        key={collect.key} 
                        style={{ height: 80, width: 360, backgroundColor: 'white', marginBottom: 10, padding: 15 }}
                        >
                        <View style={{display: 'flex', flexDirection: "row", alignItems: 'center', gap: 5}}>
                            {collect.favorite && <FontAwesome name="star" size={12} color="#eedd00" />}
                            <Text style={{ fontFamily: 'Saira_Medium', fontSize: 14 }}>
                                {collect.title}
                            </Text>
                        </View>
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
        </ScrollView>
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
    }
});
