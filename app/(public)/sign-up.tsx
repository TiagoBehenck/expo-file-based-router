import React from "react";
import { SafeAreaView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useSession } from "@/hooks/useSession";
import { Link } from "expo-router";

export default function SignIn() {

	return (
	  <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<ThemedText>Sign Up</ThemedText> 

        <Link href="/sign-in">
            <ThemedText>Voltar para login</ThemedText>
        </Link>
	  </SafeAreaView>
	);
}
