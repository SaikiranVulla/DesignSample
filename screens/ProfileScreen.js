import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const drawerMainOptions = [
  { id: 1, name: "Dashboard", image: "home" },
  { id: 2, name: "Profile", image: "person-outline" },
  { id: 3, name: "Messaging", image: "message" },
  { id: 4, name: "Payments", image: "payments" },
  { id: 5, name: "Favourites", image: "star-border" },
  { id: 6, name: "Clients", image: "work" },
  { id: 7, name: "Projects", image: "bar-chart" },
  { id: 8, name: "Technician Dashboard", image: "person" },
  { id: 9, name: "Settings", image: "settings" },
  { id: 10, name: "Help", image: "help-outline" },
  { id: 11, name: "Logout Account", image: "logout" },
];

function renderDrawerOptions(item, index) {
  return (
    <>
      {index === drawerMainOptions.length - 3 && (
        <View style={styles.renderItemDivider} />
      )}
      <View style={styles.mainRenderItemView}>
        <View style={styles.iconAndContentView}>
          <MaterialIcons
            style={{ marginRight: 8 }}
            name={item.image}
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 16 }}>{item.name}</Text>
        </View>
        {item.id == 7 && (
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        )}
      </View>
    </>
  );
}

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.closeIcon}
        >
          <AntDesign name="close" size={24} color={"black"} />
        </TouchableOpacity>
        <View style={styles.profileDetials}>
          <Image
            source={require("../assets/Mylas_M_logo-01.png")}
            style={styles.profileImageStyles}
            resizeMode="contain"
          />

          <Text style={styles.roleTextStyles}>Provider</Text>
          <Text style={styles.companyNameStyles}>Tyre Motors</Text>
          <View style={styles.borderLine} />
        </View>
      </View>

      <View style={{ flex: 0.7 }}>
        <View style={styles.bodyView}>
          <Text style={{ fontSize: 16 }}>Main</Text>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentInsetAdjustmentBehavior="automatic"
              data={drawerMainOptions}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => renderDrawerOptions(item, index)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
  subContainer: {
    flex: 0.3,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  closeIcon: {
    flex: 0.1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  profileDetials: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImageStyles: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  roleTextStyles: {
    color: "grey",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 4,
  },
  companyNameStyles: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "500",
  },
  borderLine: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "grey",
    width: "60%",
    paddingVertical: 0.8,
    borderRadius: 5,
  },
  bodyView: {
    flex: 1,
    marginHorizontal: 12,
    borderColor: "grey",
    borderWidth: 0.5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    paddingBottom: 10,
    // marginBottom: 15,
  },
  renderItemDivider: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "grey",
    width: "50%",
    paddingVertical: 1,
    borderRadius: 5,
    marginBottom: 30,
  },
  mainRenderItemView: {
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconAndContentView: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: 10,
  },
});
