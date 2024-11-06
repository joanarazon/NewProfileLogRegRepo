import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign"; // Import AntDesign for eye icon
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const Register = () => {
  const [fullName, setFullName] = useState(""); // State for full name
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigation = useNavigation(); // Access navigation

  const validatePassword = (password) => {
    // Check if password meets the requirements
    const passwordRequirements =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRequirements.test(password);
  };

  const handleRegister = () => {
    // Reset error message
    setErrorMessage("");

    // Validate input fields
    if (!fullName || !username || !password || !confirmPassword) {
      setErrorMessage("All fields are required."); // Set error message if fields are empty
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Handle registration logic here
    // After successful registration, navigate to the Login page
    Alert.alert("Success", "Registration successful!", [
      {
        text: "OK",
        onPress: () => navigation.replace("Login"), // Navigate to Login page
      },
    ]);
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
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#ccc" // Change placeholder text color to light grey
        value={fullName}
        onChangeText={setFullName} // Update state with the input text
      />
      {errorMessage && !fullName ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#ccc" // Change placeholder text color to light grey
        value={username}
        onChangeText={setUsername} // Update state with the input text
      />
      {errorMessage && !username ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

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
      {errorMessage && !password ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc" // Change placeholder text color to light grey
          value={confirmPassword}
          onChangeText={setConfirmPassword} // Update state with the input text
          secureTextEntry={!showConfirmPassword} // Toggle confirm password visibility
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={styles.eyeIcon}
        >
          <AntDesign
            name={showConfirmPassword ? "eye" : "eyeo"}
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </View>
      {errorMessage && confirmPassword && confirmPassword !== password ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginPrompt}
        onPress={() => navigation.navigate("Login")} // Navigate to Login page
      >
        <Text style={styles.loginPromptText}>
          Already have an account? Login
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
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingLeft: 10,
    color: "#fff", // Change input text color to white
  },
  passwordContainer: {
    flexDirection: "row", // Align the input and icon in a row
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
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
  loginPrompt: {
    marginTop: 15,
    alignItems: "center", // Center align the text
  },
  loginPromptText: {
    color: "#fff", // Change text color to white for better visibility
    fontSize: 16,
  },
  errorMessage: {
    color: "red", // Color for error message
    marginBottom: 5,
    fontSize: 14,
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
});

export default Register;
