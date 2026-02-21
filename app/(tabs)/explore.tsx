import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      <ScrollView className="flex-1 px-6 pt-8">
        <Text className="text-3xl font-bold text-foreground mb-2">
          Explore
        </Text>
        <Text className="text-base text-muted-foreground mb-8">
          Discover new content and features.
        </Text>

        <View className="gap-4">
          {[1, 2, 3, 4].map((item) => (
            <View key={item} className="bg-muted rounded-2xl p-5">
              <View className="flex-row items-center gap-3 mb-2">
                <View className="w-10 h-10 rounded-xl bg-primary/10 items-center justify-center">
                  <Text className="text-primary font-bold">{item}</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-foreground">
                    Item {item}
                  </Text>
                  <Text className="text-xs text-muted-foreground">
                    Tap to learn more
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
