import { View, Link, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async() => {
        const body = (username, password)
        try{
            router.push("/collects/Index");
        }catch(error){
            Alert.alert("Erro", "Falha na conexão com o servidor.");
            console.error(error);
        }
    };

    return(
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", padding: 20, backgroundColor: '#667799'}}>
        <Image
            source={require("../assets/images/cartLogo.png")} // Caminho relativo da imagem
            style={{ marginTop: 120, marginBottom: 40, width: 200, height: 200 }} // Define o tamanho da imagem
            resizeMode="contain" // Ajusta a escala da imagem
        />
        <View style={{ width: '100%', gap: 20 , justifyContent: "center", alignItems: "center"}}>
            <Stack.Screen options={{ headerShown: false }} />
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor="#BBB"
                style={{
                    width: '80%',  
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: 'white',
                    padding: 10,
                    marginBottom: 10,
                    color: 'white'
                }}
            />
            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#BBB"
                secureTextEntry
                style={{
                    width: '80%',  
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: 'white',
                    padding: 10,
                    marginBottom: 70,
                    color: 'white'
                }}
                
            />

        </View>
        <View style={{margin: 30}}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' ,margin: 0, padding: 0}} onPress={() => router.push("/signup")}>
                    <Text style={{color: 'white'}}>
                        Não tem uma conta?{' '}
                    </Text>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Crie uma!</Text>
                </TouchableOpacity>
        </View>

        <TouchableOpacity 
        onPress={handleLogin} 
        style={{
            width: "20%",
            backgroundColor: "#5856d6",
            padding: 10,
            alignItems: "center",
            borderRadius: 5,
        }}
        >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>Login</Text>
        </TouchableOpacity>
    </View>
  );
}
