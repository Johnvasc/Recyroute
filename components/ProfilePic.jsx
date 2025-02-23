import { Image, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router";


export function ProfilePic({source}){
    const router = useRouter();

    return(
      <TouchableOpacity onPress={() => router.push("/collects/Index")}>
        <Image
          source={source}
          style={{borderRadius: 100, width: 80, height: 80 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
}
