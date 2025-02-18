import { View, Text } from "react-native"

export default function Separator(){
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', width: '80%', marginVertical: 50}}>
            <View style={{flex: 1, height: 2, backgroundColor: '#999'}} />
        </View>
    )
}