# React Native  Cache Test!

Pequena aplicação de exemplo usando duas ferramenta de cache usado react native (expo).

O Objetivo era testa as funcionalidade de duas biblioteca uma com função de cache de imagens e outro de cache e validação de cache em segundo plano.

**Como testar**

Supondo que você já tenha o [yarn](https://yarnpkg.com/) na sua maquina.

```
git clone https://github.com/igorcesarcode/react-native-test-cache.git
```
```
cd /react-native-test-cache
```
```
yarn global add expo-cli
```

```
yarn
```
```
expo start
```
Agora é só ler o qrcode do expo no seu celular.

Expo Go [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) ou [IOS](https://apps.apple.com/br/app/expo-go/id982107779)

Documentação do [expo](https://docs.expo.dev/)

> O que tem na aplicação?

Basicamente duas telas, para demonstra o cache das duas principais bibliotecas desse exemplo, temos as telas "Home" e "Image" basicamente.

Uma tela leva a outra, o objetivo é mostra que mesmo mudando de tela ainda o cache permanece, e no caso requisição dos dados da API é feita a  checagem em segundo plano. 

# SWR

SWR é uma biblioteca React que tem como objetivo usar cache de requisição para ter uma melhor experiência para o usuário.
Essa biblioteca funciona tanto no Mobile quando na Web, podendo usar o método nativo de requisição fetch() nativo ou usando alguma biblioteca de terceiros, como Axios ou Graphql.

> O nome “SWR” é derivado de `stale-while-revalidate`uma estratégia de
> invalidação de cache HTTP popularizada por [HTTP RFC
> 5861](https://tools.ietf.org/html/rfc5861) . SWR é uma estratégia para
> primeiro retornar os dados do cache (obsoleto), em seguida, enviar a
> solicitação de busca (revalidar) e, finalmente, fornecer os dados
> atualizados.


## Visão geral sobre o SWR

React Native image cache e carregamento progressivo para iOS e Android. Baseado no Expo Kit.

**Instalação**   

    yarn add swr

**Uso**
    
    import React from  'react';
    import { View } from  'react-native';
    import useSWR from  'swr'
    
    function  App(){
    const  { data, error }  =  useSWR('SEU_ENDPOINT', fetcher)
    
    if  (error)  return  <View>Erro ao carregar!!!</View>
    if  (!data)  return  <View>Carregando...</View>
    return  <View>{data}!</View>
    }

Mais informações você pode encontrar [aqui](https://swr.vercel.app/).

## React Native Expo Image Cache

Biblioteca voltada para realizar cache de imagem, ferramenta extremamente útil para ter uma melhor experiência para seu usuário.


**Instalação**   

    yarn add react-native-expo-image-cache

**Uso**

    import React from  'react';
    import { View } from  'react-native';
    import { Image } from 'react-native-expo-image-cache';
    
    function  App(){
    <Image
    uri='SUA_URL'
    />
    }
Mais informações você pode encontrar [aqui](https://github.com/wcandillon/react-native-expo-image-cache).
