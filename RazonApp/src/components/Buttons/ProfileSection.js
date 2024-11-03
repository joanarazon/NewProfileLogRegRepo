import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SignOut from "../Buttons/SignOut";

const ProfileSection = ({ isDarkMode }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const correctOldPassword = "Jejajoel1975.";

  const handleManageUserPress = () => {
    setModalVisible(true);
  };

  const isPasswordStrong = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const handleUpdate = () => {
    if (oldPassword !== correctOldPassword) {
      Alert.alert(
        "Incorrect Old Password",
        "Please enter the correct old password."
      );
      return;
    }

    if (!isPasswordStrong(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters."
      );
      return;
    }

    setPasswordError("");
    alert(`Name: ${name}\nPassword: ${password}`);
    setModalVisible(false);
    setName("");
    setPassword("");
    setOldPassword("");
  };

  return (
    <View
      style={[
        styles.section,
        isDarkMode ? styles.darkSection : styles.lightSection,
      ]}
    >
      <Text
        style={[
          styles.sectionTitle,
          isDarkMode ? styles.darkText : styles.lightText,
        ]}
      >
        Profile
      </Text>
      <TouchableOpacity
        style={styles.button(isDarkMode)}
        onPress={handleManageUserPress}
      >
        <MaterialIcons
          name="manage-accounts"
          size={24}
          color={isDarkMode ? "#fff" : "#000"}
        />
        <Text style={styles.buttonText(isDarkMode)}>Manage User</Text>
      </TouchableOpacity>
      <SignOut />

      {/* Modal for managing user */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView(isDarkMode)}>
          <Text
            style={[
              styles.modalTitle,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}
          >
            Manage User
          </Text>

          {/* Old Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Old Password"
              placeholderTextColor={isDarkMode ? "#aaa" : "#555"}
              secureTextEntry={!showOldPassword}
              value={oldPassword}
              onChangeText={setOldPassword}
            />
            <TouchableOpacity
              onPress={() => setShowOldPassword(!showOldPassword)}
            >
              <MaterialIcons
                name={showOldPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          {/* Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Update Name"
            placeholderTextColor={isDarkMode ? "#aaa" : "#555"}
            value={name}
            onChangeText={setName}
          />

          {/* New Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              placeholderTextColor={isDarkMode ? "#aaa" : "#555"}
              secureTextEntry={!showNewPassword}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError("");
              }}
            />
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              <MaterialIcons
                name={showNewPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}

          <Button title="Update" onPress={handleUpdate} />
          <Button
            title="Close"
            onPress={() => setModalVisible(false)}
            color="#FF6347"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lightSection: {
    backgroundColor: "#f8f8f8",
  },
  darkSection: {
    backgroundColor: "#333",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: (isDarkMode) => ({
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: isDarkMode ? "#444" : "#f8f8f8",
    borderRadius: 5,
  }),
  buttonText: (isDarkMode) => ({
    marginLeft: 10,
    fontSize: 16,
    color: isDarkMode ? "#fff" : "#000",
  }),
  modalView: (isDarkMode) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isDarkMode
      ? "rgba(0, 0, 0, 0.8)"
      : "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 10,
  }),
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    width: "100%",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  errorText: {
    color: "red",
    marginBottom: 15,
  },
  lightText: {
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
});

export default ProfileSection;
