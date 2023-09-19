import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {bookStore } from '../data/books';
import { useState } from 'react';

export default function About({navigation}) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("started");
        setData(bookStore);
    }

    return (
        <View style={styles.container}>
         <Text> Welcome to the Dashboard</Text>
            <Button title="Show Data" onPress={() => addingData()}/>
            {
                data && data.books.map((b, index) => {
                    if(b.category.toLowerCase() == "java") {
                        return(
                            <View key={index}>
                                <Text>{b.title}</Text>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return(
                                            <View key={ind}>
                                                {a}
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    }
                })
            } 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
