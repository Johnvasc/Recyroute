import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { GlobalProvider } from '../../contexts/GlobalContext';
import Entypo from '@expo/vector-icons/Entypo';

export default function Layout(){
    const router = useRouter();
    return(
        <GlobalProvider>
        <Stack>
            <Stack.Screen name="Index" options={{title: "Recyroute", headerBackVisible: false}}/>
            <Stack.Screen name="addCollect" options={{title: "Nova coleta", headerLeft: () => null,  gestureEnabled: false}}/>
            <Stack.Screen name="collectInfo/[id]" options={{title: "Minha coleta", headerLeft: () => null,  gestureEnabled: false}}/>
            <Stack.Screen name="collects" options={{title: "Coletas", headerLeft: () => (
                        <TouchableOpacity onPress={() => {router.push('/collects/Index')}} style={{ marginLeft: 5, padding: 10 , paddingRight: 60 }}>
                            <Entypo name="home" size={24} color="black"/>
                        </TouchableOpacity>
                    )}}/>
            <Stack.Screen name="waste" options={{title: "Coletas", headerLeft: () => (
                        <TouchableOpacity onPress={() => {console.log('teste'); router.push('/collects/Index')}} style={{ marginLeft: 5, padding: 10, paddingRight: 60 }}>
                            <Entypo name="home" size={24} color="black"/>
                        </TouchableOpacity>
                    )}}/>
            <Stack.Screen name="edit" options={{title: "Editar perfil", headerLeft: () => (
                        <TouchableOpacity onPress={() => router.push('/collects/Index')} style={{ marginLeft: 5, padding: 10, paddingRight: 60 }}>
                            <Entypo name="home" size={24} color="black"/>
                        </TouchableOpacity>
                    )}}/>
        </Stack>
        </GlobalProvider>
    )
}