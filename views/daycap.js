import React from 'react';
import { SafeAreaView, View,ImageBackground, FlatList,Image, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Rating, AirbnbRating } from 'react-native-ratings';

const Item = ({ anh }) => (
    <View style={{width:'50%',alignItems:'center',justifyContent:'space-around'}}>
      <Image style={{}} source={anh}></Image>
      <View style={{alignItems:'flex-start',marginBottom:5}}>
       <Text style={{marginBottom:5}}>Cáp chuyển từ Cổng USB sang PS2...</Text>
       <View style={{flexDirection:'row',marginBottom:5}}><Rating imageSize={18}/><Text>{"("}15{")"}</Text></View>
       <View style={{flexDirection:'row'}}><Text>69.900 đ</Text><Text style={{color:'gray',marginLeft:20}}>-39%</Text></View>
        
      </View>

    </View>
  );
  
  const DATA = [
    {
      anh: require('../assets/Bai2/1.png'),
     
    },
    {
        anh: require('../assets/Bai2/2.png'),
        
    }, {
        anh: require('../assets/Bai2/3.png'),
       
      },
      {
          anh: require('../assets/Bai2/4.png'),
          
      }, {
        anh: require('../assets/Bai2/5.png'),
       
      },
      {
          anh: require('../assets/Bai2/6.png'),
          
      }, {
        anh: require('../assets/Bai2/1.png'),
       
      },
      {
          anh: require('../assets/Bai2/2.png'),
          
      }, 
    
  ];

export default function DayCap(){
    const renderItem = ({ item }) => (
        <Item anh={item.anh} />
      );
    

    return (
        <SafeAreaView style={{flex: 1}}>
          <ImageBackground  source={require('../assets/2.png')} resizeMode="cover" style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',height:50}}>
            <Image style={{}} source={require('../assets/3.png')}></Image>
            <View style={{height:35,width:200,backgroundColor:'white',flexDirection:'row',alignItems:'center'}}>
              <Image style={{marginRight:10,marginLeft:10}} source={require('../assets/kinh.png')}></Image>
              <TextInput inlineImageLeft='' placeholder='Dây cáp usb' style={{height:35,width:130,backgroundColor:'white'}}></TextInput>
            </View>
            <Image source={require('../assets/4.png')}></Image>
            <Image style={{}}  source={require('../assets/3c.png')}></Image>
          </ImageBackground>
            <FlatList style={{}}
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