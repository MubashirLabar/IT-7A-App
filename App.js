import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";

function App() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.title}>Pizza</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.title}>Zinger</Text>
        </View>
        <View style={styles.box3}>
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
  box1: {
    height: 260,
    width: 200,
    borderRadius: 24,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    height: 260,
    width: 200,
    borderRadius: 24,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  box3: {
    height: 260,
    width: 200,
    borderRadius: 24,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
});
