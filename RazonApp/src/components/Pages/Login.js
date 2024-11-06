import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign"; // Import AntDesign for eye icon
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const Login = () => {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigation = useNavigation(); // Access navigation

  const handleLogin = () => {
    // Reset error message
    setErrorMessage("");

    // Validate input fields
    if (!username || !password) {
      setErrorMessage("Both fields are required."); // Set error message if fields are empty
      return;
    }

    // Check for specific username and password
    if (username === "joanapretty123" && password === "Jejajoel1975.") {
      // Navigate to Profile page
      navigation.replace("Profile");
    } else {
      setErrorMessage("Invalid username or password."); // Set error message for invalid credentials
    }
  };

  return (
    <LinearGradient
      colors={["#D5006D", "#2196F3"]} // Dark pink to blue gradient
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logotry.png")}
          style={styles.logo}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#ccc" // Change placeholder text color to light grey
        value={username}
        onChangeText={setUsername} // Update state with the input text
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#ccc" // Change placeholder text color to light grey
          value={password}
          onChangeText={setPassword} // Update state with the input text
          secureTextEntry={!showPassword} // Toggle password visibility
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <AntDesign
            name={showPassword ? "eye" : "eyeo"}
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </View>

      {/* Display error message if exists */}
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("PasswordRecovery")} // Navigate to Password Recovery screen
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Register")} // Navigate to Register screen
      >
        <Text style={styles.registerButtonText}>
          Don't have an account? Register
        </Text>
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
  logoContainer: {
    alignItems: "center", // Center logo within its container
    marginBottom: 20, // Space between logo and other elements
  },
  logo: {
    top: -100,
    width: 350,
    height: 100,
    borderRadius: 20, // Makes the image circular
    bottom: -50, // Adjust this to fit nicely within the banner
    borderWidth: 3,
    borderColor: "#fff",
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
  passwordContainer: {
    flexDirection: "row", // Align the input and icon in a row
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1, // Make the input take up available space
    height: 40,
    paddingLeft: 10,
    color: "#fff", // Change password input text color to white
  },
  eyeIcon: {
    padding: 10,
  },
  button: {
    backgroundColor: "#FF6347", // Example button color
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  errorMessage: {
    color: "red", // Color for error message
    marginBottom: 15,
    textAlign: "center", // Center align the error message
  },
  forgotPassword: {
    marginTop: 15,
    alignItems: "center", // Center align the text
  },
  forgotPasswordText: {
    color: "#fff", // Change text color to white for better visibility
    fontSize: 16,
  },
  registerButton: {
    marginTop: 20,
    alignItems: "center", // Center align the text
  },
  registerButtonText: {
    color: "#fff", // Change text color to white for better visibility
    fontSize: 16,
  },
});

export default Login;
