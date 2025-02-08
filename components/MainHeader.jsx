import {TouchableOpacity, Text, View } from "react-native"
import {ProfilePic} from './ProfilePic'

export function MainHeader({username, loc, profilePic}){
    return(
        <View style={{display: 'flex', alignItems: 'center', gap: 10, margin: '1rem'}}>
            <ProfilePic source={{ uri: 'https://picsum.photos/80' }} ></ProfilePic>
            <Text style={{fontFamily: 'Ropa Sans', fontSize: 14, fontWeight: 'bold', color: 'black'}}>
                {username}
            </Text>
            <Text style={{fontFamily: 'Ropa Sans', fontSize: 12, color: '#858585'}}>
                Região - {loc}
            </Text>
        </View>
    )
}