import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Loading(){
  const navigation = useNavigation();
  const opacity = useRef(new Animated.Value(0)).current;
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 2 }
    ).start(() => {
      setRedirecting(true);
    });

    const timer = setTimeout(() => {
      if (redirecting){ // Redireciona apenas se o estado de redirecionamento for verdadeiro
        navigation.navigate('login'); // Substitua 'Index' pelo nome da sua tela index
      }
    }, 2000); // Redireciona após 3 segundos (após a animação completa)

    return () => {
      clearTimeout(timer); // Limpa o timer se o componente for desmontado antes do redirecionamento
    };
  }, [navigation, redirecting]); // Adicione navigation e redirecting como dependências

  return (
    <View style={{ flex: 1, backgroundColor: "#667799", alignItems: 'center', justifyContent: 'center' }}>
      <Animated.Image
        source={require("../assets/images/cartLogo.png")}
        style={{ marginTop: -200, width: 200, height: 150, opacity: opacity }}
        resizeMode="contain" // Ou "cover" ou "stretch" se desejar
      />
    </View>
  );
}