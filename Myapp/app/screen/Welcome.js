import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Item({ item }) {
    return (
      <View style={styles.listItem}>
        <Image source={{uri:item.imageUrl}}  style={{width:60, height:60,borderRadius:30}} />
        <View style={{alignItems:"center",flex:1}}>
          <Text style={{fontWeight:"bold"}}>{item.fullName}</Text>
          <Text>{item.title}</Text>
        </View>
        <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}} onPress={item.onpress}>
          <Text style={{color:"green"}}>More</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default function Welcome({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch("https://thronesapi.com/api/v2/Characters");
        const data = await resp.json();
        setData(data);
        setLoading(false);
      };
    
      useEffect(() => {
        fetchData();
      }, []);

    return(
        <View style={styles.container}>
          <View style={styles.headerContainer}>
        <Text style={styles.title}>User List</Text>
        <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.battery} onPress={() => navigation.navigate('BatteryLevel')}>
        <Icon name="battery-3" size={20} color="green" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.micbtn} onPress={() => navigation.navigate('VoiceToText')}>
        <Icon name="microphone" size={20} color="#ffcc00" />
        </TouchableOpacity>
        
      </View>
      
       
       {data && (
        <FlatList
          style={{flex:1}}
          data={data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.id}
        />
    )}
      </View>

    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      marginTop:30
    },
    listItem:{
      margin:10,
      padding:10,
      backgroundColor:"#FFF",
      width:"90%",
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:5
    },
    title:{
        fontSize: 20,
        textAlign:'left',
        marginTop: 20,
        marginBottom: 20,
        marginLeft:20

    },
    headerContainer:{
      flexDirection: 'row',
      marginTop: 20,
      // position:'absolute',
      // bottom:30,
    },
    profileBtn: {
      color: '#ffcc00',
      position:'absolute',
      left:0,
      bottom:25,
      marginLeft:180,
    },
    micbtn:{
      position:'absolute',
      left:80,
      bottom:25,
      marginLeft:180,
    },
    battery:{
      position:'absolute',
      left:130,
      bottom:25,
      marginLeft:180,
    }
  });