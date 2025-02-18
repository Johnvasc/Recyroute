import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="Index"/>
            <Stack.Screen name="addCollect" options={{title: "Nova coleta"}}/>
            <Stack.Screen name="collectInfo/[id]" options={{title: "Minha coleta"}}/>
            <Stack.Screen name="collects" options={{title: "Coletas"}}/>
            <Stack.Screen name="waste" options={{title: "Coletas"}}/>
        </Stack>
    )
}