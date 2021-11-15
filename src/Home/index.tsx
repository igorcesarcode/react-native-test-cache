import React , { useEffect, useState }from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import {CacheManager} from "react-native-expo-image-cache";

import axios from "axios"

import useSWR, { useSWRConfig } from 'swr'



const fetcherNative = (url: RequestInfo) => fetch(url).then(res => res.json());
const fetcherAxios = (url: string) => axios.get(url).then(res => res.data);


export function Home({navigation}: any ){
  const { mutate } = useSWRConfig()
  const { data, error } = useSWR(
    "https://deelay.me/1000/https://jsonplaceholder.typicode.com/posts/1",
    fetcherAxios
  );

  return ( 
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Abrir Imagem"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Limpa chache da imagem"
        onPress={ async() => await CacheManager.clearCache()}
      />

    <Text style={styles.text} >{!data ? 'Carregando...' : data.body}</Text>   
    <Button
      title="Atualizar chache estado." 
      onPress={() => {
        mutate('https://deelay.me/1000/https://jsonplaceholder.typicode.com/posts/1');
      } }
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
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color:'red',  
  }
});