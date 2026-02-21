import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background items-center justify-center px-6">
      <View className="w-16 h-16 rounded-2xl bg-primary/10 items-center justify-center mb-6">
        <Text className="text-3xl">🎉</Text>
      </View>
      <Text className="text-2xl font-bold text-foreground mb-2 text-center">
        Modal Screen
      </Text>
      <Text className="text-base text-muted-foreground mb-8 text-center">
        This is a modal screen. You can present it from any tab.
      </Text>
      <Pressable
        onPress={() => router.back()}
        className="bg-primary rounded-xl py-3 px-8 active:opacity-80"
      >
        <Text className="text-white font-semibold">Dismiss</Text>
      </Pressable>
    </View>
  );
}
