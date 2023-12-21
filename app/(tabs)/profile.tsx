import { Image, View, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View>
      <Image
        source={{
          uri: "https://picsum.photos/id/11/400/850?grayscale",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 860,
  },
});