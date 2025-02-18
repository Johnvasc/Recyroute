import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const SuccessPopup = ({ isVisible, onClose }) => {
  return (
    <Modal isVisible={isVisible} animationIn="bounceIn" animationOut="fadeOut">
      <View style={styles.modalContent}>
        <Text style={styles.text}>Item criado com sucesso!</Text>
        <Button title="Fechar" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SuccessPopup;