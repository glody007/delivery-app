import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-bold text-blue-500">Home screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}