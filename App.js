import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

const { width, height } = Dimensions.get("window");

function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("./images/img-1.jpg")} style={styles.image} />

        <Image
          source={{
            uri: "https://images.pexels.com/photos/34341415/pexels-photo-34341415.jpeg",
          }}
          style={styles.image}
        />

        <Image
          source={{
            uri: "https://images.pexels.com/photos/34101421/pexels-photo-34101421.jpeg",
          }}
          style={styles.image}
        />

        <Image
          source={{
            uri: "https://images.pexels.com/photos/34369620/pexels-photo-34369620.jpeg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/8428267/pexels-photo-8428267.jpeg",
          }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: height,
    width: width,
  },
});
