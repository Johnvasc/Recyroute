import { View, Dimensions, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MainHeader } from '../components/MainHeader';
import { useState } from "react";
import { useFonts } from "expo-font";
import { Saira_400Regular, Saira_500Medium, Saira_700Bold } from "@expo-google-fonts/saira";

import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Collects() {
    const [selectedTab, setSelectedTab] = useState("novos");

    const screenHeight = Dimensions.get("window").height;
    const screenWidth = Dimensions.get("window").width;

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
                                color={selectedTab === tab.key ? "#007AFF" : "#999"}
                            />
                        )}
                        <Text style={[styles.navText, selectedTab === tab.key && styles.navTextActive]}>
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
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
        paddingVertical: 10,
    },
    navButton: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 14,
        color: "#999",
        fontFamily: "Saira_Medium",
    },
    navTextActive: {
        color: "#007AFF",
    }
});
