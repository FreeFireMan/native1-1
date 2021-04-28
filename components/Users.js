import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { OneUser } from "./OneUser";

export const Users = () => {

  const users = [
    { id: 9, name: 'vasya', age: 31, isMarried: false, image: '../assets/favicon.png', address: { city: 'Kyiv', street: 'Gongadze', number: 16 } },
    { id: 2, name: 'petya', age: 30, isMarried: true, image: '../assets/favicon.png', address: { city: 'Rivne', street: 'Zelena', number: 1 } },
    { id: 4, name: 'kolya', age: 29, isMarried: true, image: '../assets/favicon.png', address: { city: 'Lviv', street: 'Pasichna', number: 121 } },
    { id: 3, name: 'olya', age: 28, isMarried: false, image: '../assets/favicon.png', address: { city: 'Rivne', street: 'Shevchenko', number: 90 } },
    { id: 8, name: 'max', age: 30, isMarried: true, image: '../assets/favicon.png', address: { city: 'Lviv', street: 'Kriva Lipa', number: 115 } },
    { id: 6, name: 'anya', age: 31, isMarried: false, image: '../assets/favicon.png', address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
    { id: 10, name: 'oleg', age: 28, isMarried: false, image: '../assets/favicon.png', address: { city: 'Kyiv', street: 'Centralna', number: 22 } },
    { id: 5, name: 'andrey', age: 29, isMarried: true, image: '../assets/favicon.png', address: { city: 'Lviv', street: 'Gorodotska', number: 43 } },
    { id: 1, name: 'masha', age: 30, isMarried: true, image: '../assets/favicon.png', address: { city: 'Kyiv', street: 'Peremogi', number: 12 } },
    { id: 7, name: 'olya', age: 31, isMarried: false, image: '../assets/favicon.png', address: { city: 'Lviv', street: 'Naukova', number: 16 } },
    { id: 11, name: 'max', age: 31, isMarried: true, image: '../assets/favicon.png', address: { city: 'Rivne', street: 'Ivana Franka', number: 121 } }
  ];

  return (
      <View style={styles.usersList}>
        <FlatList
            data={users}
            renderItem={({ item }) => {
              return <OneUser item={item}/>
            }}
            keyExtractor={item => item.id.toString()}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  usersList: {
    backgroundColor: '#d99a9a',
    height: '100%'
  },
});