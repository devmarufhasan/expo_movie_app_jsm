import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View className="flex h-full items-center justify-center bg-red-300">
            <Text className="text-lg font-bold text-primary">47 Min!</Text>
            <Link href="/">
                <Text className="text-lg text-secondary">Go to Movie 1</Text>
            </Link>
        </View>
    );
}
