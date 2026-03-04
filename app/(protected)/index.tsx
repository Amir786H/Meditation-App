import SignOutButton from "@/components/clerk/SignOutButton";
import { sessions } from "@/utils/sessions";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    // <>
    //   <Gradient isSpeaking={false} position="bottom" />
    //   <View
    //     style={{
    //       flex: 1,
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text>Home Screen</Text>
    //     <SignOutButton />
    //   </View>
    // </>

    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {sessions.map((session) =>
        <Pressable
          key={session.id}
          style={{ borderWidth: 1, padding: 16, marginVertical: 6 }}
          onPress={() => router.navigate({
            pathname: "/session",
            params: { sessionId: session.id },
          })}
        >
          <Text>{session.title}</Text>
        </Pressable>)}

        <SignOutButton />
    </ScrollView>
  );
}
