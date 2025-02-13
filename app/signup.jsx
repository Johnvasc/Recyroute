import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Stack } from "expo-router";
import { useState } from "react";
import { useRouter } from "expo-router";
import * as Location from "expo-location";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    input: {
      width: "80%",
      borderWidth: 1,
      borderRadius: 8,
      borderColor: "white",
      padding: 10,
      marginBottom: 5,
      color: "white",
    },
  });

export default function Signup(){
    const router = useRouter();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState(false);
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    let [localizationBtnStatus, setLocColor] = useState("white");

    const  handleSignup = async () => {
        if(!username || !password || !confirm || password !== confirm){
            Alert.alert("Erro", "Preencha todos os campos corretamente!");
            return;
        }
        if(!location){
            Alert.alert("Erro", "Localização não obtida!");
            return;
        }
        const fullName = (name || "") + " " + (surname || "");
    
        const body = {name: fullName.trim(), email, username, countType: selectedValue, password, localization: location}
        try{
            const response = await fetch("http://192.168.0.16:8080/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            
            const data = await response.json();
            
            if(response.ok){
                Alert.alert("Cadastro bem-sucedido!", "Redirecionando para a página inicial.");
                router.push("/login");
            }else{
                Alert.alert("Erro", data.message || "Falha no cadastro. Verifique suas credenciais.");
            }
        }catch(error){
            Alert.alert("Erro", "Falha na conexão com o servidor.");
            console.error(error);
        }
    };
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permissão negada", "É necessário permitir o acesso à localização.");
          return;
        }
        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
        setLocColor('green');
    };
    return(
    <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", padding: 20, backgroundColor: '#667799'}}>
        <Image
            source={require("../assets/images/cartLogo.png")}
            style={{ marginTop: 40, marginBottom: 40, width: 200, height: 200 }}
            resizeMode="contain"
        />
        <View style={{ width: '100%', gap: 20 , justifyContent: "center", alignItems: "center"}}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, width: '80%'}}>
                <TextInput placeholderTextColor="#BBB" placeholder="Nome" value={name} onChangeText={setName} style={{width: '30%', borderWidth: 1, borderRadius: 8, borderColor: "white", marginBottom: 5, color: 'white', padding: 10}}/>
                <TextInput placeholderTextColor="#BBB" placeholder="Sobrenome" value={surname} onChangeText={setSurname} style={{width: '65%', borderWidth: 1, borderRadius: 8, borderColor: "white", marginBottom: 5, color: 'white', padding: 10}}/>
            </View>
            <TextInput placeholderTextColor="#BBB" placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} autoCapitalize="none" style={styles.input}/>
            <TextInput placeholderTextColor="#BBB" placeholder="Username" value={username} onChangeText={setUsername} style={styles.input}/>
            <TextInput placeholderTextColor="#BBB" placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            <TextInput placeholderTextColor="#BBB" placeholder="Confirmar senha" value={confirm} onChangeText={setConfirm} secureTextEntry style={styles.input} />
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                style={{ width: 240, color: "gray", padding: 28, fontSize: 10, borderRadius: 6, height: 40, marginBottom: 20, backgroundColor: '#EEE'}}>
                <Picker.Item label="Morador" value="1" />
                <Picker.Item label="Coletor" value="2" />
            </Picker>

        </View>
        <TouchableOpacity onPress={getLocation} style={{backgroundColor: 'white', padding: 10, paddingLeft: 30, paddingRight: 30, borderRadius: 3, marginBottom: 20}}>
            {!location && <FontAwesome6 name="location-crosshairs" size={16} color="gray" />}
            {location && <AntDesign name="check" size={16} color="green" />}
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={handleSignup} 
        style={{
            width: "30%",
            backgroundColor: "#5856d6",
            padding: 10,
            alignItems: "center",
            borderRadius: 5,
        }}
        >
            <Text style={{ color: 'white', fontWeight: "bold", fontSize: 12 }}>Cadastro</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}
