import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Aqui você pode adicionar lógica de autenticação
        router.push("/"); // Redireciona para a página inicial após login
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
