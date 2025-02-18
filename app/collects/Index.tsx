import { View, Dimensions, Text, StyleSheet, ScrollView, Image} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Saira_400Regular, Saira_500Medium, Saira_700Bold } from "@expo-google-fonts/saira";
import PagerView from 'react-native-pager-view';

import { MainHeader } from "../../components/MainHeader";
import { MainNav } from "../../components/MainNav";
import  MapScreen  from "../../components/MapScreen";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function main(){
    const screenHeight = Dimensions.get("window").height;
    const screenWidth = Dimensions.get("window").width; 
    const [fontsLoaded] = useFonts({
        Saira_Regular: Saira_400Regular,
        Saira_Medium: Saira_500Medium,
        Saira_Bold: Saira_700Bold,
    });
    
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            borderRadius: 12,
            padding: 20,
            marginLeft: -20, // Faz a borda esquerda "sair da tela"
            
            // Simulando borda com sombra
            borderWidth: 1,
            borderColor: "#E0E0E0",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2, // Para Android
        },
        containerPage: {
              flex: 1,
              margin: 10
        },
        page:{
              justifyContent: 'space-evenly',
              alignItems: 'center',
            },
        containerMain: {
            backgroundColor: '#EEE',
            display: 'flex',
            alignItems: 'center',
            height: Dimensions.get("window").height,
            width: '100%',
        },
        scrollViewContent: {
            paddingBottom: 30, // Adicionando padding extra no final para garantir que não fique cortado
        },
        });




    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    
    if(!fontsLoaded){
        return null;
    }
        const locations = [
        { id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" },
        { id: 2, latitude: -3.7350, longitude: -38.5230, title: "Local 2", description: "Segunda localização" },
        { id: 3, latitude: -3.7300, longitude: -38.5200, title: "Local 3", description: "Terceira localização" }
    ];
    return(
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <MainHeader username='John Vasconcelos' loc='Castelão' profilePic='https://picsum.photos/80'></MainHeader>
            <View style={{display: 'flex', alignItems:'center'}}>
                <MainNav></MainNav>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', width: screenWidth, justifyContent: 'space-evenly', alignItems: 'center', marginTop: 30, borderColor: '#ddd', borderStyle: 'solid', borderWidth: 1, borderRadius: 6, marginLeft: -30}}>
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Saira_Medium', fontSize: 48}}>500</Text>
                    <Text style={{fontFamily: 'Saira_Regular', fontSize: 15}}>Kg de material</Text>

                </View>
                <Image
                    source={require("../../assets/images/undraw_clean-up_af4s.png")}
                    style={{ marginTop: 40, marginBottom: 40, width: 108, height: 116 }}
                    resizeMode="contain"
                />
            </View>

            <View style={{display: 'flex', flexDirection: 'row', width: screenWidth, justifyContent: 'space-evenly', alignItems: 'center', marginTop: 30, borderColor: '#ddd', borderStyle: 'solid', borderWidth: 1, borderRadius: 6, marginRight: -30}}>
                
                <Image
                    source={require("../../assets/images/undraw_eco-conscious_oqny.png")}
                    style={{ marginTop: 40, marginBottom: 40, width: 140, height: 105 }}
                    resizeMode="contain"
                />
                
                    <View style={styles.containerPage}>
                    <PagerView style={styles.containerPage} initialPage={0}>
                        <View style={styles.page} key="1">
                            <Text style={{fontFamily: 'Saira_Medium', margin: -5, fontSize: 9}}>Top materiais reaproveitados:</Text>
                            <Image
                                source={require("../../assets/images/Chart .png")}
                                style={{ margin: 0, width: 300, height: '100%' }}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.page} key="2">
                        <Text style={{fontFamily: 'Saira_Medium', marginBottom: -30, fontSize: 9}}>Top materiais reaproveitados:</Text>
                        <Image
                                source={require("../../assets/images/Chart 2.png")}
                                style={{ width: 200, height: 200 }}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.page} key="3">
                        <Text style={{fontFamily: 'Saira_Medium', marginBottom: -30, fontSize: 9}}>Coletas por mês:</Text>
                        <Image
                                source={require("../../assets/images/chart3.png")}
                                style={{ width: 200, height: 200 }}
                                resizeMode="contain"
                            />
                        </View>
                    </PagerView>
                    </View>
            </View>
            <View>
            

            </View>
            <View style={{display: 'flex', width: screenWidth, justifyContent: 'space-evenly', marginTop: 30, marginBottom: 130, alignItems: 'center'}}>
                <Text style={{fontFamily: 'Saira_Medium', fontSize: 9, margin: 10}}>Meus pontos de coleta:</Text>
                <MapScreen locations={locations}></MapScreen>
            </View>
        </ScrollView>
    )
}
