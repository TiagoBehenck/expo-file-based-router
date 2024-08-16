import React from "react";

import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from "react-native";
export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText type="title">You are logged in</ThemedText>
    </SafeAreaView>
  );
}