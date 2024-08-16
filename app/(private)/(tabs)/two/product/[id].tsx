import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native";

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>Product id: {id}</ThemedText>
    </SafeAreaView>
  ) 
}