import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>
          Discover new content and features.
        </Text>

        <View style={styles.list}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.card}>
              <View style={styles.cardRow}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>{item}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>Item {item}</Text>
                  <Text style={styles.cardSubtext}>Tap to learn more</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 32 },
  title: { fontSize: 30, fontWeight: "bold", color: "#0f172a", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#64748b", marginBottom: 32 },
  list: { gap: 16 },
  card: { backgroundColor: "#f1f5f9", borderRadius: 16, padding: 20 },
  cardRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  iconContainer: {
    width: 40, height: 40, borderRadius: 12,
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    alignItems: "center", justifyContent: "center",
  },
  iconText: { color: "#6366f1", fontWeight: "bold" },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: "600", color: "#0f172a" },
  cardSubtext: { fontSize: 12, color: "#64748b" },
});
