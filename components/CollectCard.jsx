import { Saira_400Regular, Saira_500Medium, Saira_700Bold } from "@expo-google-fonts/saira";
import {TouchableOpacity, Text} from 'react-native'

export function CollectCard({title}){
    return(
        <TouchableOpacity style={{backgroundColor: '#FFF', width: 360, height: 50, display: 'flex', justifyContent: 'center', padding: 12, borderRadius: 12}}>
            <Text style={{fontFamily: 'roboto', fontSize: 18, color: '#667788'}}>{title}</Text>
        </TouchableOpacity>
    )
}