import { View, Text, StyleSheet, ScrollView } from "react-native";

function App() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Text style={styles.title}>Pizza</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "orange" }]}>
          <Text style={styles.title}>Zinger</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "blue" }]}>
          <Text style={styles.title}>Pasta</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    paddingVertical: 68,
    paddingHorizontal: 20,
  },
  box: {
    height: 260,
    width: 200,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
});
