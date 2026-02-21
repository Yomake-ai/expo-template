import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>🎉</Text>
      </View>
      <Text style={styles.title}>Modal Screen</Text>
      <Text style={styles.subtitle}>
        This is a modal screen. You can present it from any tab.
      </Text>
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Dismiss</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#ffffff",
    alignItems: "center", justifyContent: "center", paddingHorizontal: 24,
  },
  iconContainer: {
    width: 64, height: 64, borderRadius: 16,
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    alignItems: "center", justifyContent: "center", marginBottom: 24,
  },
  icon: { fontSize: 30 },
  title: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginBottom: 8, textAlign: "center" },
  subtitle: { fontSize: 16, color: "#64748b", marginBottom: 32, textAlign: "center" },
  button: { backgroundColor: "#6366f1", borderRadius: 12, paddingVertical: 12, paddingHorizontal: 32 },
  buttonText: { color: "#ffffff", fontWeight: "600" },
});
