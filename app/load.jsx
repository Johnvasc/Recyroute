import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação

export default function Loading() {
  const navigation = useNavigation(); // Inicialize o hook de navegação
  const opacity = useRef(new Animated.Value(0)).current; // Valor inicial da opacidade
  const [redirecting, setRedirecting] = useState(false); // Estado para controlar o redirecionamento

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1500, // Duração da animação de fade-in
          useNativeDriver: true, // Otimização para dispositivos móveis
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1500, // Duração da animação de fade-out
          useNativeDriver: true,
        }),
      ]),
      { iterations: 3 } // Repete a animação 3 vezes (6 segundos no total)
    ).start(() => {
      setRedirecting(true); // Define o estado de redirecionamento como verdadeiro após a animação
    });

    const timer = setTimeout(() => {
      if (redirecting) { // Redireciona apenas se o estado de redirecionamento for verdadeiro
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