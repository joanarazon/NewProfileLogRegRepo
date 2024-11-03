import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Settings = ({ isDarkMode, toggleSwitch }) => {
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
        Settings
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("No recent notifications found.")}
      >
        <MaterialIcons name="notifications-active" size={24} color="black" />
        <Text
          style={[
            styles.buttonText,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Notifications
        </Text>
      </TouchableOpacity>

      <View style={styles.switchContainer}>
        <Text
          style={[
            styles.switchLabel,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Dark Mode
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#212121" }}
          thumbColor={isDarkMode ? "#fafafa" : "#212121"}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
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
    backgroundColor: "rgba(248, 248, 248, 0.8)", // Light mode translucent background
  },
  darkSection: {
    backgroundColor: "rgba(51, 51, 51, 0.8)", // Dark mode translucent background
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "transparent", // You can adjust this as needed
  },
  buttonText: {
    marginLeft: 10, // Space between icon and text
    fontSize: 16,
  },
  lightText: {
    color: "#000", // Light mode text color
  },
  darkText: {
    color: "#fff", // Dark mode text color
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  switchLabel: {
    fontSize: 16,
  },
});

export default Settings;
