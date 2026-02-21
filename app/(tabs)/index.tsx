import { View, Text, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      <ScrollView className="flex-1 px-6 pt-8">
        <Text className="text-3xl font-bold text-foreground mb-2">
          Welcome
        </Text>
        <Text className="text-base text-muted-foreground mb-8">
          Your app is ready. Start building something amazing.
        </Text>

        <View className="bg-muted rounded-2xl p-6 mb-6">
          <Text className="text-lg font-semibold text-foreground mb-2">
            Get Started
          </Text>
          <Text className="text-sm text-muted-foreground mb-4">
            Edit app/(tabs)/index.tsx to customize this screen.
          </Text>
          <Link href="/modal" asChild>
            <Pressable className="bg-primary rounded-xl py-3 px-6 active:opacity-80">
              <Text className="text-white font-semibold text-center">
                Open Modal
              </Text>
            </Pressable>
          </Link>
        </View>

        <View className="bg-muted rounded-2xl p-6">
          <Text className="text-lg font-semibold text-foreground mb-2">
            Features
          </Text>
          <View className="gap-3">
            {[
              "Expo Router for file-based navigation",
              "NativeWind (Tailwind CSS) for styling",
              "TypeScript for type safety",
              "Tab navigation with icons",
            ].map((feature, i) => (
              <View key={i} className="flex-row items-center gap-3">
                <View className="w-2 h-2 rounded-full bg-primary" />
                <Text className="text-sm text-muted-foreground flex-1">
                  {feature}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
