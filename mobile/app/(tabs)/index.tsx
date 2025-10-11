import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../src/styles/globalStyles";
import { useRouter } from "expo-router";
import { Image } from 'expo-image';
import food1 from '../../assets/images/food1.webp';
import food2 from '../../assets/images/food2.webp';
import food3 from '../../assets/images/food3.webp';

const index = () => {
  const router = useRouter();

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Image source={food2} style={globalStyles.image} />
        <Image source={food1} style={globalStyles.image} />
        <Image source={food3} style={globalStyles.image} />
      </View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => router.push("/(auth)/SignIn")}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;