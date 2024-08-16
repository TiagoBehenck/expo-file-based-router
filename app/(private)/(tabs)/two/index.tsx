import { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";

import { useSession } from "@/hooks/useSession";
import { ThemedText } from "@/components/ThemedText";
import { Redirect, router } from "expo-router";

export default function TabTwoScreen() {
  const { session, signOut } = useSession();

  useEffect(() => {
    console.log("two", session);
  }, [session]);

  if (!session) return <ThemedText>Loading...</ThemedText>;

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <ThemedText>Account: {' '}</ThemedText>
        <ThemedText>{session || "No username"}</ThemedText>
      </View>
      <Button title="Log out" onPress={signOut} />

      <Button title="Ir para tela de produto" onPress={() => router.push("/(private)/(tabs)/two/product/1")} />
    </SafeAreaView>
  );
}