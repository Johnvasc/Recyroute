import { View, Platform, Button, Linking, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
    const latitude = -3.7327;
    const longitude = -38.5270;

    if (Platform.OS === "web") {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button
                    title="Abrir no Google Maps"
                    onPress={() => Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`)}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker coordinate={{ latitude, longitude }} title="Localização" description="Você está aqui" />
            </MapView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 300,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});