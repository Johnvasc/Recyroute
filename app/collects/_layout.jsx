import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Layout(){
    const router = useRouter();
    return(
        <Stack>
            <Stack.Screen name="Index" options={{title: "Recyroute", headerBackVisible: false}}/>
            <Stack.Screen name="addCollect" options={{title: "Nova coleta"}}/>
            <Stack.Screen name="collectInfo/[id]" options={{title: "Minha coleta", headerLeft: () => null,  gestureEnabled: false}}/>
            <Stack.Screen name="collects" options={{title: "Coletas", headerLeft: () => (
                        <TouchableOpacity onPress={() => router.push('/collects/Index')} style={{ marginLeft: 5, paddingRight: 40 }}>
                            <AntDesign name="home" size={24} color="#44464f" />
                        </TouchableOpacity>
                    )}}/>
            <Stack.Screen name="waste" options={{title: "Coletas", headerLeft: () => (
                        <TouchableOpacity onPress={() => router.push('/collects/Index')} style={{ marginLeft: 5, paddingRight: 40 }}>
                            <AntDesign name="home" size={24} color="#44464f" />
                        </TouchableOpacity>
                    )}}/>
            <Stack.Screen name="edit" options={{title: "Editar perfil", headerLeft: () => (
                        <TouchableOpacity onPress={() => router.push('/collects/Index')} style={{ marginLeft: 5, paddingRight: 40 }}>
                            <AntDesign name="home" size={24} color="#44464f" />
                        </TouchableOpacity>
                    )}}/>
        </Stack>
    )
}