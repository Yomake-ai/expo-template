import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      <ScrollView className="flex-1 px-6 pt-8">
        <View className="items-center mb-8">
          <View className="w-20 h-20 rounded-full bg-primary/10 items-center justify-center mb-4">
            <Text className="text-3xl">👤</Text>
          </View>
          <Text className="text-xl font-bold text-foreground">User Name</Text>
          <Text className="text-sm text-muted-foreground">user@example.com</Text>
        </View>

        <View className="gap-3">
          {[
            { label: "Settings", icon: "⚙️" },
            { label: "Notifications", icon: "🔔" },
            { label: "Privacy", icon: "🔒" },
            { label: "Help", icon: "❓" },
          ].map((item) => (
            <View
              key={item.label}
              className="flex-row items-center gap-4 bg-muted rounded-xl p-4"
            >
              <Text className="text-lg">{item.icon}</Text>
              <Text className="text-base text-foreground flex-1">
                {item.label}
              </Text>
              <Text className="text-muted-foreground">›</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
