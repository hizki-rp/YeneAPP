import React from "react";
import { Text, Image, ImageBackground, View } from 'react-native';
import { images } from "../../constants";


const home = () => {


  return (
    <View className="flex-1 flex-col items-center justify-center bg-stone-900">
        <View className=" w-[98vw] h-[80vh] bg-stone-900 rounded-2xl flex flex-col justify-center items-center ">
        <Image source={images.pexels2}
        
          className="w-full h-full rounded-2xl"
          resizeMode="contain"
          
           />
          <Text className=" text-stone-100 text-xl absolute bottom-10 left-5">{'John'}</Text>
          <Text className=" text-stone-400 absolute bottom-5 left-5">{'Lorem ipsum dolor sit amet, '}</Text>
        
      </View>
      </View>
    );
}


export default home;