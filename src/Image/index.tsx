import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image as ImageCache } from "react-native-expo-image-cache";

export function Image(){
  return ( 
    <View style={styles.container}>
      <Text>Imagem</Text>
      <ImageCache 
      style={{ height: 100, width: 100 }}
      uri='https://github.com/igorcesarcode.png'
      />
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});