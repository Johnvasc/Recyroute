import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useRouter } from "expo-router";


export default function ProgressBBar({route}){
    const router = useRouter();
    const [progress, setProgress] = useState(0.3);
    useEffect(() => {
    const interval = setInterval(() => {
        setProgress((prev) => {
        if(prev >= 1){
            clearInterval(interval);
            router.push(route);
            return 1;
        }
        return prev + 0.2;
        });
    }, 1000);

    return () => {
        clearInterval(interval);
    };
    }, []);

    return(
        <View style={{position: "absolute", top: 0, left: 0, right: 0, zIndex: 1}}>
        <ProgressBar progress={progress} color="#667799" style={styles.progressBar} />
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        height: 5,
        backgroundColor: "#ddd",
    }
})