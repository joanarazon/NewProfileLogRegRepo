import React, { useState } from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Text,
} from "react-native";
import { ImageBackground } from "react-native"; // Import ImageBackground

const screenWidth = Dimensions.get("window").width;

const Index = () => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  const handleProfilePicPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <ImageBackground
        source={require("../../assets/Banner_pic.jpg")}
        style={styles.banner}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
      </ImageBackground>

      {/* Profile Picture */}
      <TouchableOpacity onPress={handleProfilePicPress}>
        <Image
          source={require("../../assets/Profile_pic.jpg")}
          style={styles.profilePic}
          resizeMode="cover"
        />
      </TouchableOpacity>

      {/* Modal for Image Preview */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeText}>X</Text>
          </Pressable>
          <Image
            source={require("../../assets/Profile_pic.jpg")}
            style={styles.modalImage}
            resizeMode="contain"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    width: screenWidth,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 300,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  profilePic: {
    top: -70,
    width: 200,
    height: 200,
    borderRadius: 50, // Makes the image circular
    position: "center",
    bottom: -50, // Adjust this to fit nicely within the banner
    borderWidth: 5,
    borderColor: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background for the modal
  },
  modalImage: {
    width: "90%",
    height: "70%",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 30,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
  closeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Index;
