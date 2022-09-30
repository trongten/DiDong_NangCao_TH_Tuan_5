import React from 'react';
import { SafeAreaView, View, FlatList,Image,StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Rating, AirbnbRating } from 'react-native-ratings';
const Item = ({ anh }) => (
    <View style={{width:'50%',alignItems:'center',justifyContent:'space-around'}}>
      <Image style={{}} source={anh}></Image>
      <View style={{alignItems:'flex-start'}}>
       <Text>Cáp chuyển từ Cổng USB sang PS2...</Text>
        <Rating imageSize={20}/>
        <Text>69.900 đ</Text>
      </View>

    </View>
  );
  
  const DATA = [
    {
      anh: require('../assets/ga.png'),
     
    },
    {
        anh: require('../assets/ga.png'),
        
    }, {
        anh: require('../assets/ga.png'),
       
      },
      {
          anh: require('../assets/ga.png'),
          
      }, {
        anh: require('../assets/ga.png'),
       
      },
      {
          anh: require('../assets/ga.png'),
          
      }, {
        anh: require('../assets/ga.png'),
       
      },
      {
          anh: require('../assets/ga.png'),
          
      }, {
        anh: require('../assets/ga.png'),
       
      },
      {
          anh: require('../assets/ga.png'),
          
      },
    
    
  ];

export default function DayCap(){
    const renderItem = ({ item }) => (
        <Item anh={item.anh} />
      );
    

    return (
        <SafeAreaView style={{flex: 1,marginTop: StatusBar.currentHeight || 0}}>
            <FlatList
                horizontal={false}
                numColumns={2}
                data={DATA}
                renderItem={renderItem}
        
            />
            <View>
              <Image style={{width:'100%'}} source={require('../assets/23.png')}></Image>
            </View>
        </SafeAreaView>
    )
}