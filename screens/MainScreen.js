import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Button, Card, Paragraph, Title } from "react-native-paper";

const cilentsData = [
  {
    id: 1,
    name: "Astamin",
    imageUrl: require("../assets/randomProfile-1.jpg"),
  },
  { id: 2, name: "Bealls", imageUrl: require("../assets/randomProfile-2.jpg") },
  {
    id: 3,
    name: "Astamin",
    imageUrl: require("../assets/randomProfile-3.jpg"),
  },
  {
    id: 4,
    name: "Bealls",
    imageUrl: require("../assets/randomProfile-4.jpeg"),
  },
  {
    id: 5,
    name: "Astamin",
    imageUrl: require("../assets/randomProfile-5.jpeg"),
  },
];

const MainScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Profile")}
        >
          <MaterialIcons name="menu" size={24} color={"black"} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  function additinalCOntent(imageName, size) {
    return (
      <View style={styles.seeMoreContainer}>
        <Image
          source={require("../assets/ImagePlaceholder.jpg")}
          style={styles.additionalImage}
          resizeMode="cover"
        />
        <View style={styles.imageDetailsView}>
          <Text style={styles.imageNameText}>{imageName}</Text>
          <Text style={styles.imageSizeText}>{size}</Text>
        </View>
        <View style={styles.iconView}>
          <MaterialCommunityIcons
            name="download-box-outline"
            size={22}
            color={"blue"}
            style={{ marginRight: 15 }}
          />
          <AntDesign name="delete" size={22} color={"red"} />
        </View>
      </View>
    );
  }

  function renderProjectCard(color) {
    return (
      <Card style={{ marginBottom: 10 }}>
        <Card.Content>
          <View
            style={{
              width: "32%",
              backgroundColor: color,
              paddingVertical: 6,
              borderRadius: 10,
            }}
          >
            <Text style={styles.upcomingText}>Upcoming</Text>
          </View>
          <Text style={styles.mainTitleOfProject}>Design Concept</Text>
          <Text>
            Donce justo lacus, auctor non rutrum eget, tempus eu nibh, Etiam
            sodales elit non purus.
          </Text>
          <View style={styles.dateView}>
            <Text style={{ marginLeft: 8 }}>Apr 18, 2022</Text>
          </View>
          <View style={(styles.GapBtwView, { flexDirection: "row" })}>
            <View style={styles.firstCircle} />
            <View style={styles.secondCircle} />
          </View>
        </Card.Content>
      </Card>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainContainer}
      >
        <View style={styles.mainImageContainer}>
          <Image
            source={require("../assets/Mylas_M_logo-01.png")}
            style={styles.mainImageStyle}
            resizeMode="cover"
          />
        </View>
        <Button
          mode="contained"
          labelStyle={styles.buttonLabelStyle}
          style={styles.buttonContainer}
        >
          Upload Photo
        </Button>
        <View style={styles.bodyContainer}>
          <Text style={styles.comapanyNameStyle}>Tyre Motors</Text>
          <Text style={styles.typeofComapany}>Automatic</Text>
          <View style={styles.GapBtwView}>
            <View style={styles.detailsContainer}>
              <View style={{ flex: 0.65 }}>
                <Text style={styles.detailsTextColor}>Denver,</Text>
                <Text style={styles.detailsTextColor}>CO</Text>
              </View>
              <View>
                <Text style={styles.detailsTextColor}>25-30</Text>
                <Text style={styles.detailsTextColor}>employee</Text>
              </View>
            </View>
            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={{ flex: 0.7 }}>
                <MaterialIcons name="email" size={24} color={"gray"} />
                <Text style={styles.detailsTextColor}>corp@tyremotors.com</Text>
              </View>
              <View>
                <MaterialIcons name="phone" size={24} color={"gray"} />
                <Text style={styles.detailsTextColor}>303-562-1092</Text>
              </View>
            </View>
          </View>
          <View style={styles.GapBtwView}>
            <View style={styles.cilentsContainer}>
              <Text style={{ fontSize: 19 }}>Cilents</Text>
              <View style={styles.seeMoreContainer}>
                <Text style={{ color: "orange" }}>See more</Text>
                <MaterialIcons
                  name="arrow-right-alt"
                  size={24}
                  color={"orange"}
                />
              </View>
            </View>
            <FlatList
              // horizontal
              contentInsetAdjustmentBehavior="automatic"
              numColumns={4}
              data={cilentsData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.cilentsView}>
                  <Image
                    source={item.imageUrl}
                    style={styles.cilentsImageStyle}
                    resizeMode="cover"
                  />
                  <Text style={{ fontSize: 15, fontWeight: "600" }}>
                    {item.name}
                  </Text>
                </View>
              )}
            />
            <View style={styles.addButtonPosition}>
              <Ionicons name="add-circle-sharp" size={40} color="blue" />
            </View>
          </View>
          <View style={styles.GapBtwView}>
            <Card>
              <Card.Content>
                <Title style={styles.cardTitles}>Company Name</Title>
                <Paragraph>Jackson Vita</Paragraph>
                <View style={styles.GapBtwView}>
                  <Title style={styles.cardTitles}>Contact Email</Title>
                  <Paragraph>jvita@tyremotors.com</Paragraph>
                </View>

                <View style={styles.GapBtwView}>
                  <Title style={styles.cardTitles}>HeadQuarter(s)</Title>
                  <Paragraph>Denver, CO, Austin, TX, Miami, FL</Paragraph>
                </View>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.GapBtwView}>
            <Text style={{ fontSize: 19 }}>About</Text>
            <Text style={styles.aboutParagraph}>
              Denver's premier automotive service provider, We specialize in
              connecting vehicle owners with expert technicians dedicated to
              keeping your car running smoothly. Drive with confidence and peace
              of mind with Tyre Motors - where quality service and expert care
              are just a call away.
            </Text>
          </View>
          <View style={styles.GapBtwView}>
            <Card>
              <Card.Content>
                <Text style={styles.additionalTitle}>
                  Additional Files and Images
                </Text>
                {additinalCOntent("TeamPic.jpg", "PDF 9mb")}
                {additinalCOntent("WorkshopImg.jpg", "PNG 4mb")}
              </Card.Content>
            </Card>
          </View>
          <View style={[styles.GapBtwView, { paddingHorizontal: 12 }]}>
            <Text style={styles.CurrentProjectText}>Current Open Projects</Text>
            <View style={styles.projectContainerView}>
              {renderProjectCard("orange")}
              {renderProjectCard("green")}
              {renderProjectCard("red")}
            </View>
            <Card>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 22 }}>Create Project</Text>
                <Ionicons name="add-circle-sharp" size={40} color="blue" />
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 12,
    borderWidth: 0.4,
    borderColor: "grey",
    marginHorizontal: 14,
    paddingHorizontal: 20,
  },
  mainImageContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  buttonLabelStyle: {
    color: "black",
    textTransform: "capitalize",
    shadowOffset: 0,
  },
  buttonContainer: {
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: "#F8F8FF",
    shadowOffset: 0,
  },
  bodyContainer: {
    flex: 0.7,
    marginTop: 16,
  },
  comapanyNameStyle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 6,
  },
  typeofComapany: {
    fontSize: 12,
    color: "blue",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cilentsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seeMoreContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cilentsView: {
    flex: 1,
    marginRight: 12,
    marginTop: 6,
  },
  cilentsImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  addButtonPosition: {
    position: "absolute",
    right: 0,
    bottom: 30,
  },
  cardTitles: {
    fontSize: 15,
  },
  aboutParagraph: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 22,
  },
  additionalTitle: {
    color: "grey",
    fontSize: 16,
  },
  additionalImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    flex: 0.2,
  },
  imageDetailsView: {
    flex: 0.55,
    marginLeft: 12,
  },
  imageNameText: {
    fontSize: 14,
    fontWeight: "600",
  },
  imageSizeText: {
    color: "grey",
    fontSize: 12,
  },
  iconView: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
  },
  CurrentProjectText: {
    fontSize: 22,
    fontWeight: "500",
  },
  projectContainerView: {
    marginTop: 16,
    flex: 1,
  },
  upcomingText: {
    marginLeft: 8,
    color: "white",
  },
  mainTitleOfProject: {
    marginVertical: 6,
    fontSize: 18,
  },
  dateView: {
    backgroundColor: "#C0C0C0",
    width: "38%",
    paddingVertical: 6,
    borderRadius: 10,
    marginVertical: 10,
  },
  detailsTextColor: {
    color: "grey",
  },
  firstCircle: {
    backgroundColor: "#A9A9A9",
    borderWidth: 2,
    borderColor: "#D3D3D3",
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  secondCircle: {
    position: "relative",
    right: 12,
    backgroundColor: "#A9A9A9",
    borderWidth: 2,
    borderColor: "#D3D3D3",
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  GapBtwView: {
    marginVertical: 16,
  },
});
