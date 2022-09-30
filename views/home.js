import React from 'react';
import { SafeAreaView, ImageBackground,View, FlatList,Image,StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Item = ({ anh,tieude,shop }) => (
    <View style={{width:'100%',flexDirection:'row',height:80,borderBottomWidth:1,borderBottomColor:'gray',alignItems:'center',justifyContent:'space-around'}}>
      <Image source={anh}></Image>
      <View style={{height:'100%'}}>
        <Text style={{marginBottom:10}}>{tieude}</Text>
        <Text style={{color:'red'}}>Shop {shop}</Text>
      </View>
      <View>
        <TouchableOpacity style={{backgroundColor:'red',height:40,width:80,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontSize:18,fontWeight:'400'}}>Chat</Text></TouchableOpacity>
      </View>

    </View>
  );
  
  const DATA = [
    {
      anh: require('../assets/ca_nau_lau.png'),
      tieude: 'Ca nấu lẩu, nấu mì mini mini..',
      shop: 'Devang',
    },
    {
        anh: require('../assets/ga_bo_toi.png'),
        tieude: 'Ca nấu lẩu, nấu mì mini mini..',
        shop: 'Devang',
    },
    {
        anh: require('../assets/xa_can_cau.png'),
        tieude: 'Ca nấu lẩu, nấu mì mini mini..',
        shop: 'Devang',
    },
    {
        anh: require('../assets/do_choi_dang_mo_hinh.png'),
        tieude: 'Ca nấu lẩu, nấu mì mini mini..',
        shop: 'Devang',
    },
    {
        anh: require('../assets/lanh_dao_gian_don.png'),
        tieude: 'Ca nấu lẩu, nấu mì mini mini..',
        shop: 'Devang',
    },
    {
        anh: require('../assets/hieu_long_con_tre.png'),
        tieude: 'Ca nấu lẩu, nấu mì mini mini..',
        shop: 'Devang',
    },
    {
        anh: require('../assets/trump_1.png'),
        tieude: 'Ca nấu lẩu, nấu mì mini mini..',
        shop: 'Devang',
    },
      
    
  ];

export default function Home({navigation}){
    const renderItem = ({ item }) => (
        <Item anh={item.anh} tieude={item.tieude} shop={item.shop}/>
      );
    

    return (
        <SafeAreaView style={{flex: 1}}>
          <ImageBackground  source={require('../assets/2.png')} resizeMode="cover" style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',height:50}}>
            <Image style={{marginLeft:-50}} source={require('../assets/3.png')}></Image>
            <Image source={require('../assets/5.png')}></Image>
            <Image style={{marginRight:-50}}  source={require('../assets/4.png')}></Image>
          </ImageBackground>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                ListHeaderComponent={()=>
                <View style={{height:70,width:'100%',alignItems:'center',justifyContent:'center',borderBottomWidth:1,borderColor:'gray'}}><Text>Bạn có thắc mắc với sản phẩm
                   vừa xem đừng ngại chát với shop!</Text></View>}
            />
            <View>
              <TouchableOpacity  onPress={()=> navigation.navigate('DayCap')} >
                <Image style={{width:'100%'}} source={require('../assets/23.png')}></Image>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}