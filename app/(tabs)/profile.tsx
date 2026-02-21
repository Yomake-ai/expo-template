import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.email}>user@example.com</Text>
        </View>

        <View style={styles.menuList}>
          {[
            { label: "Settings", icon: "⚙️" },
            { label: "Notifications", icon: "🔔" },
            { label: "Privacy", icon: "🔒" },
            { label: "Help", icon: "❓" },
          ].map((item) => (
            <View key={item.label} style={styles.menuItem}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Text style={styles.menuArrow}>›</Text>
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
  avatarSection: { alignItems: "center", marginBottom: 32 },
  avatar: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    alignItems: "center", justifyContent: "center", marginBottom: 16,
  },
  avatarEmoji: { fontSize: 30 },
  name: { fontSize: 20, fontWeight: "bold", color: "#0f172a" },
  email: { fontSize: 14, color: "#64748b" },
  menuList: { gap: 12 },
  menuItem: {
    flexDirection: "row", alignItems: "center", gap: 16,
    backgroundColor: "#f1f5f9", borderRadius: 12, padding: 16,
  },
  menuIcon: { fontSize: 18 },
  menuLabel: { fontSize: 16, color: "#0f172a", flex: 1 },
  menuArrow: { color: "#64748b" },
});
