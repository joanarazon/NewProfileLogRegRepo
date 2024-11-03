import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Modal,
  Platform,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const SignOut = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignOut = () => {
    setModalVisible(true);
  };

  const confirmSignOut = () => {
    setModalVisible(false);
    navigation.navigate("Login"); // Navigate to Login page
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleSignOut}
        style={styles.signOutButton(colorScheme)}
      >
        <AntDesign
          name="logout"
          size={24}
          color={colorScheme === "dark" ? "#fff" : "#000"}
        />
        <Text style={styles.buttonText(colorScheme)}>Sign Out</Text>
      </Pressable>

      {/* Modal for confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You have been signed out.</Text>
            <Pressable style={styles.modalButton} onPress={confirmSignOut}>
              <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "left",
    justifyContent: "left",
    padding: 10,
  },
  signOutButton: (colorScheme) => ({
    flexDirection: "row",
    alignItems: "left",
    padding: 10,
    backgroundColor: colorScheme === "dark" ? "#444" : "#fff",
    borderRadius: 5,
  }),
  buttonText: (colorScheme) => ({
    color: colorScheme === "dark" ? "#fff" : "#000",
    marginLeft: 8,
    alignItems: "left",
  }),
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 250,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
  },
  modalButton: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
  },
  modalButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default SignOut;
