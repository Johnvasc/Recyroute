import { View, Dimensions, Text, StyleSheet} from "react-native";
import { Svg, Image } from 'react-native-svg';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Saira_400Regular, Saira_500Medium, Saira_700Bold } from "@expo-google-fonts/saira";

import { MainHeader } from "../components/MainHeader";
import { MainNav } from "../components/MainNav";
import { CollectCard } from "../components/CollectCard";



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
      });




    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    
    if(!fontsLoaded){
        return null; // Retorna nada enquanto carrega
    }
    return(
        <View style={{backgroundColor: '#EEE', display: 'flex', alignItems: 'center', height: screenHeight, width: '100%', maxWidth: screenWidth}}>
            <MainHeader username='John Vasconcelos' loc='Castelão' profilePic='https://picsum.photos/80'></MainHeader>
            <MainNav></MainNav>
            <View style={{display: 'flex', flexDirection: 'row', width: screenWidth, justifyContent: 'space-evenly', alignItems: 'center', margin: 30, borderColor: 'red', borderStyle: 'solid', borderWidth: 1, borderRadius: 6, marginLeft: -30}}>
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Saira_Medium', fontSize: 48}}>500</Text>
                    <Text style={{fontFamily: 'Saira_Regular', fontSize: 15}}>Kg de material</Text>

                </View>
                <Svg width={108} height={116}>
                    <Image
                        href={require("../assets/images/undraw_clean-up_af4s.svg")}
                        width={108}
                        height={116}
                    />
                </Svg>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', width: screenWidth, justifyContent: 'space-evenly', alignItems: 'center', margin: 30, borderColor: 'red', borderStyle: 'solid', borderWidth: 1, borderRadius: 6, marginRight: -30}}>
            <Svg width={108} height={116}>
                    <Image
                        href={require("@/assets/images/undraw_eco-conscious_oqny.svg")} // Caminho relativo da imagem
                        width= {140}
                        height= {105} 
                    />
                </Svg>
                
                
                
                <View>
                    <Text style={{fontFamily: 'Saira_Medium', fontSize: 9}}>Top materiais reaproveitados:</Text>
                </View>
            </View>
            <View>
            

            </View>
            <View style={{display: 'flex', width: screenWidth, justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Text style={{fontFamily: 'Saira_Medium', fontSize: 9}}>Meus pontos de coleta:</Text>
            </View>

            <CollectCard title='Coleta Aberta'>
            </CollectCard>
        </View>
    )
}

