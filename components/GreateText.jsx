import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { defaultFeatureFlags } from 'react-native-css-interop/dist/css-to-rn/feature-flags';

export default function GreatText(){
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        placeholder="comentários..."
        multiline={true}
        numberOfLines={4} // Número mínimo de linhas visíveis
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textArea: {
    marginVertical: 50,
    backgroundColor: 'white',
    height: 100,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top', // Garante que o texto comece do topo
  },
});
