import React from "react";
import { Text, Image, ImageBackground, View, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import { images } from "../../constants";
import { icons } from '../../constants';



const home = () => {

  const {height, width} = useWindowDimensions();

  const DATA = [
    {
      image: images.pexels1,

      title: "John85",
      description: "This is the first item",
    },
    {
      image: images.pexels2,

      title: "Rick22",
      description: "This is the second item",
    },
    {
      image: images.pexels3,

      title: "Sam50",
      description: "This is the third item",
    },
    {
      image: images.pexels4,

      title: "Gary45",
      description: "This is the fourth item",
    },
    {
      image: images.pexels5,

      title: "cory3",
      description: "This is the fourth item",
    },
    {
      image: images.pexels6,

      title: "kim21",
      description: "This is the fourth item",
    },
    {
      image: images.pexels7,

      title: "David10",
      description: "This is the fourth item",
    },
    {
      image: images.pexels8,

      title: "sarah3",
      description: "This is the fourth item",
    },
    {
      image: images.pexels9,

      title: "Jane2",
      description: "This is the fourth item",
    },
    {
      image: images.pexels10,

      title: "hanna",
      description: "This is the fourth item",
    },
  ];

  return (
    <View className=" items-center justify-center bg-stone-900 ">
    

        <FlatList
        data={DATA}
        pagingEnabled
          renderItem={({ item, index, separators }) => (
            
            <View style={{ height: height-49, width:width }}
              className="w-full h-full object-cover"
            >
              <Image source={item.image} 
               className=" w-full h-full object-cover"
              />
              <Text className=" text-stone-50 text-2xl absolute bottom-10 ml-1 mb-2 font-poppins_bold">{item.title}</Text>
              <Text className=" text-stone-50 text-md font-poppins_light absolute bottom-0 mb-5">{item.description}<Text className="ml-2 text-sm font-poppins_bold">view more ...</Text></Text>

          
            </View>
            


          ) 
            
          }
        />

        
      
      </View>
    );
}


export default home;