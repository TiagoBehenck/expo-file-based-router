import React from "react";
import { SafeAreaView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useSession } from "@/hooks/useSession";
import { Link } from "expo-router";

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
	  <ThemedText onPress={signIn}>Sign in</ThemedText>
        <Link href="/sign-up">
	      <ThemedText>Criar uma conta nova</ThemedText>
	    </Link>
    </SafeAreaView>
  );
}
