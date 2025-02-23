import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from "expo-router";
import * as Location from "expo-location";

const styles = StyleSheet.create({
    nabB: {backgroundColor: '#EEE', borderRadius: 100, width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center'},
});

export function MainNav(){
    const router = useRouter();
    return(
        <View style={{width: '98%', backgroundColor: '#FFF', borderRadius: 6, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 20, paddingBottom: 10}}>
            <View>
                <TouchableOpacity style={styles.nabB} onPress={()=>{router.push("/collects/collects");}}>
                    <Entypo name="shopping-cart" size={24} color="#999"/>
                </TouchableOpacity>
                <Text style={{fontFamily: 'Ropa Sans', fontSize: 9, color: '#999'}}>Minhas coletas</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.nabB} onPress={()=>{router.push("/collects/waste");}}>
                    <FontAwesome name="recycle" size={24} color="#999"/>
                </TouchableOpacity>
                <Text style={{fontFamily: 'Ropa Sans', fontSize: 9, color: '#999'}}>Meus resíduos</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.nabB} onPress={()=>{router.push("/collects/edit");}}>
                    <AntDesign name="edit" size={24} color="#999" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'Ropa Sans', fontSize: 9, color: '#999'}}>Editar perfil</Text>          
            </View>


        </View>
    )
}