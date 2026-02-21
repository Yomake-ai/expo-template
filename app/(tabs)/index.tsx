import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Your app is ready. Start building something amazing.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Get Started</Text>
          <Text style={styles.cardText}>
            Edit app/(tabs)/index.tsx to customize this screen.
          </Text>
          <Link href="/modal" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Open Modal</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Features</Text>
          <View style={styles.featureList}>
            {[
              "Expo Router for file-based navigation",
              "StyleSheet for styling",
              "TypeScript for type safety",
              "Tab navigation with icons",
            ].map((feature, i) => (
              <View key={i} style={styles.featureRow}>
                <View style={styles.bullet} />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
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
  card: { backgroundColor: "#f1f5f9", borderRadius: 16, padding: 24, marginBottom: 24 },
  cardTitle: { fontSize: 18, fontWeight: "600", color: "#0f172a", marginBottom: 8 },
  cardText: { fontSize: 14, color: "#64748b", marginBottom: 16 },
  button: { backgroundColor: "#6366f1", borderRadius: 12, paddingVertical: 12, paddingHorizontal: 24 },
  buttonText: { color: "#ffffff", fontWeight: "600", textAlign: "center" },
  featureList: { gap: 12 },
  featureRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  bullet: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#6366f1" },
  featureText: { fontSize: 14, color: "#64748b", flex: 1 },
});
