import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Index from "../Avatar/Index";
import ProfileSection from "../Buttons/ProfileSection";
import Settings from "../Buttons/Settings";

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <LinearGradient
        colors={isDarkMode ? ["#333", "#121212"] : ["#FF6347", "#4682B4"]}
        style={styles.container}
      >
        {/* Header section */}
        <View style={styles.header}>
          <Index />
          <Text
            style={[
              styles.nameText,
              { color: isDarkMode ? "#fff" : "#bdbdbd" },
            ]}
          >
            Joana Eve Razon
          </Text>
          <Text
            style={[styles.subText, { color: isDarkMode ? "#fff" : "#90a4ae" }]}
          >
            Senior Quality Evaluator
          </Text>
          <Text
            style={[styles.subText, { color: isDarkMode ? "#fff" : "#90a4ae" }]}
          >
            Joined 4 Years ago
          </Text>
        </View>

        <View style={styles.mainContent}>
          <ProfileSection isDarkMode={isDarkMode} />
          <Settings isDarkMode={isDarkMode} toggleSwitch={toggleSwitch} />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures ScrollView content stretches to fill the available space
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 50,
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -20,
    color: "#FF5733",
  },
  subText: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 5,
  },
});

export default Profile;
