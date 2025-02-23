import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import MapScreen from "../../components/MapScreen";
import ProgressBBar from "../../components/progressBar";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Edit(){
    const [name, setName] = useState('John Vasconcelos');
    const [editName, setEditName] = useState(false);
    const [progressBar, setProgress] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [showEditIcon, setShowEditIcon] = useState(false);
    const [location, setLocation] = useState([{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }]);
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permissão negada", "É necessário permitir o acesso à localização.");
          return;
        }
        setLocation([
            { 
                id: Date.now(), // Força a mudança ao gerar um novo ID
                latitude: -3.7465636, 
                longitude: -38.5806999, 
                title: "Local 1", 
                description: "Campus do Pici" 
            }
        ]);
    };
    return(
        <View>
            {progressBar && <ProgressBBar route={"/collects/Index"}/>
            }
            <View style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity 
                onPress={() => setShowEditIcon(!showEditIcon)}
                style={{ position: 'relative', width: 80, height: 80 }}
            >
                <Image
                    source={{ uri: 'https://picsum.photos/80' }} 
                    style={{ borderRadius: 100, width: 80, height: 80 }}
                    resizeMode="contain"
                />
                {showEditIcon && (
                    <View style={{
                        position: 'absolute',
                        top: 0, right: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        borderRadius: 50,
                        padding: 5
                    }}>
                        <AntDesign name="edit" size={18} color="white" />
                    </View>
                )}
            </TouchableOpacity>
            </View>

            {!editName &&       
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, margin: 10}}>
                <Text style={{fontSize: 18, color:"#44464f", fontWeight: 'bold'}}>
                    {name}
                </Text>
                <TouchableOpacity onPress={()=>setEditName(true)}>
                    <AntDesign name="edit" size={24} color="#44464f"/>
                </TouchableOpacity>
            </View>}

            {editName &&
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, margin: 10}}>
                <TextInput
                value={name}
                onChangeText={setName}
                color={'#667799'}
                fontSize={18}
                />
                <TouchableOpacity onPress={()=>setEditName(false)}>
                    <AntDesign name="check" size={24} color="#44464f"/>
                </TouchableOpacity>
            </View>
            }

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, margin: 10}}>
                <Text style={{fontSize: 18, color:"#44464f"}}>Tipo de conta:</Text>
                <Text style={{fontSize: 18, color:"gray"}}>Morador</Text>
            </View>
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                <Text style={{fontSize: 18, color:"#44464f"}}>Endereço típico:</Text>
                <MapScreen key={location[0]?.id} locations={location} />
            </View>
            <TouchableOpacity disabled={disabled2} onPress={()=>{getLocation; setDisabled2(true)}} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, backgroundColor: 'white', padding: 20, borderRadius: 6, margin: 10, marginHorizontal: 100}}>
                    <FontAwesome6 name="location-crosshairs" size={16} color="gray" />
                </TouchableOpacity>
            <TouchableOpacity disabled={disabled} onPress={()=>{setProgress(true); setDisabled(true)}} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, backgroundColor: '#667799', padding: 20, borderRadius: 6, margin: 10, marginHorizontal: 100}}>
                <AntDesign name="check" size={14} color="white" />
                <Text style={{color: 'white'}}>
                    Salvar alterações
                </Text>
            </TouchableOpacity>
        </View>
    )
}