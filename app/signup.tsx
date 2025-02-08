import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Stack } from "expo-router";
import { useState } from "react";
import { useRouter } from "expo-router";

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

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const handleLogin = () => {
        // Aqui você pode adicionar lógica de autenticação
        router.push("/"); // Redireciona para a página inicial após login
    };

    return(
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", padding: 20, backgroundColor: '#667799'}}>
        <Image
            source={require("../assets/images/cartLogo.png")} // Caminho relativo da imagem
            style={{ marginTop: 40, marginBottom: 40, width: 200, height: 200 }} // Define o tamanho da imagem
            resizeMode="contain" // Ajusta a escala da imagem
        />
        <View style={{ width: '100%', gap: 20 , justifyContent: "center", alignItems: "center"}}>
            <Stack.Screen options={{ headerShown: false }} />
            <TextInput placeholder="Email" keyboardType="email-address" autoCapitalize="none" style={styles.input}/>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input}/>
            <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            <TextInput placeholder="Confirmar senha" value={confirm} onChangeText={setConfirm} secureTextEntry style={styles.input} />
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                style={{ width: 240, color: "gray", padding: 10, borderRadius: 6, height: 40, marginBottom: 20}}>
                <Picker.Item label="Opção 1" value="op1" />
                <Picker.Item label="Opção 2" value="op2" />
                <Picker.Item label="Opção 3" value="op3" />
            </Picker>

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
