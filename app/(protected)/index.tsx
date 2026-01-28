import { SignOutButton } from "@/components/clerk/SignOutButton";
import { Gradient } from "@/components/gradient";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <Gradient isSpeaking={false} position="bottom" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home Screen</Text>
        <SignOutButton />
      </View>
    </>
  );
}
