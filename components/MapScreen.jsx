import { View, Platform, Button, Linking, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

// O componente MapScreen agora aceita a prop 'locations'
export default function MapScreen({ locations }) {
    if (Platform.OS === "web") {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button
                    title="Abrir no Google Maps"
                    onPress={() => Linking.openURL(`https://www.google.com/maps?q=${locations[0].latitude},${locations[0].longitude}`)}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: locations[0]?.latitude || 0, // Posição inicial
                    longitude: locations[0]?.longitude || 0,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                {/* Adicionando múltiplos marcadores */}
                {locations.map((location) => (
                    <Marker
                        key={location.id}
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        title={location.title}
                        description={location.description}
                    />
                ))}
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
