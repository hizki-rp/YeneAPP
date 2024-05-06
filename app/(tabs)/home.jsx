import React from "react";
import { Text, Image, ImageBackground, View, ScrollView } from 'react-native';
import { images } from "../../constants";



const home = () => {

  const DATA = [
    {
      image: images.pexels1,

      title: "First Item",
    },
    {
      image: images.pexels2,

      title: "Second Item",
    },
    {
      image: images.pexels3,

      title: "Second Item",
    },
    {
      image: images.pexels4,

      title: "Second Item",
    },
  ];

  return (
    <View className="flex-1 flex-col items-center justify-center bg-stone-900 w-full h-full">
        <View className="  justify-center items-center rounded-2xl w-full h-full">

        <ScrollView>
          <View>
          <Image source={DATA[0].image}

            className="w-full h-full rounded-2xl w-[98vw] h-[100vh] bg-stone-900 rounded-2xl flex flex-col"
            resizeMode="contain"

            />

            <Text className=" text-stone-100 text-xl absolute bottom-[100] left-5">{'John'}</Text>
            <Text className=" text-stone-400 absolute bottom-[70] left-5">{'Lorem ipsum dolor sit amet, '}</Text>

          </View>
          
          <View>
            <Image source={DATA[1].image}

              className="w-full h-full rounded-2xl w-[98vw] h-[100vh] bg-stone-900 rounded-2xl flex flex-col"
              resizeMode="contain"

            />

            <Text className=" text-stone-100 text-xl absolute bottom-[100] left-5">{'John'}</Text>
            <Text className=" text-stone-400 absolute bottom-[70] left-5">{'Lorem ipsum dolor sit amet, '}</Text>

          </View>

          <View>
            <Image source={DATA[2].image}

              className="w-full h-full rounded-2xl w-[98vw] h-[100vh] bg-stone-900 rounded-2xl flex flex-col"
              resizeMode="contain"

            />

            <Text className=" text-stone-100 text-xl absolute bottom-[100] left-5">{'John'}</Text>
            <Text className=" text-stone-400 absolute bottom-[70] left-5">{'Lorem ipsum dolor sit amet, '}</Text>

          </View>

          <View>
            <Image source={DATA[3].image}

              className="w-full h-full rounded-2xl w-[98vw] h-[100vh] bg-stone-900 rounded-2xl flex flex-col"
              resizeMode="contain"

            />

            <Text className=" text-stone-100 text-xl absolute bottom-[100] left-5">{'John'}</Text>
            <Text className=" text-stone-400 absolute bottom-[70] left-5">{'Lorem ipsum dolor sit amet, '}</Text>

          </View>



        
     
        </ScrollView>

        
        
      </View>
      </View>
    );
}


export default home;