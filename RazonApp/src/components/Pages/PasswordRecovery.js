import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const PasswordRecovery = () => {
  const [email, setEmail] = useState(""); // State for email input
  const navigation = useNavigation(); // Access navigation

  const generateRandomPassword = () => {
    const length = 8; // Length of the random password
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"; // Characters to use in the password
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  };

  const handleSendPassword = () => {
    // Check if email is provided
    if (!email) {
      Alert.alert("Error", "Please enter your email address.");
      return;
    }

    // Generate a random password
    const newPassword = generateRandomPassword();

    // Here you would typically send the newPassword to the user's email
    // For now, we will just show an alert
    Alert.alert(
      "Password Sent",
      `A random password has been sent to ${email}.`
    );

    // Optionally clear the email input
    setEmail("");
  };

  return (
    <LinearGradient
      colors={["#D5006D", "#2196F3"]} // Dark pink to blue gradient
      style={styles.container}
    >
      <Text style={styles.title}>Password Recovery</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        placeholderTextColor="#ccc" // Change placeholder text color to light grey
        value={email}
        onChangeText={setEmail} // Update state with the input text
      />

      <TouchableOpacity style={styles.button} onPress={handleSendPassword}>
        <Text style={styles.buttonText}>Send Temporary Password</Text>
      </TouchableOpacity>

      {/* Back to Login Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Login")} // Navigate back to Login page
      >
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff", // Change title color to white for better visibility on gradient
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    color: "#fff", // Change input text color to white
  },
  button: {
    backgroundColor: "#FF6347", // Example button color
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 10, // Add space below the send button
  },
  buttonText: {
    color: "#fff", // Keep button text color white
    fontSize: 18,
  },
  backButton: {
    alignItems: "center",
    padding: 10,
  },
  backButtonText: {
    color: "#fff", // Change text color to white for better visibility
    fontSize: 16,
  },
});

export default PasswordRecovery;
