import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import { Redirect, router, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
    return (
        <SafeAreaView className="bg-stone-900 h-full ">
            <ScrollView contentContainerStyle={{height: '105%'}} >
        
                <View className="pt-8">
                    <View className="w-full items-center min-h-[120vh] px-4">

                        <Image source={images.pexels1}
                            className="w-[430px] h-[184px] mt-1 rounded-tr-full
                        rounded-tl-full
                        rounded-br-full rounded-bl-full opacity-[0.9] " resizeMode="contain" />

                        <Text className="text-rose-600 text-5xl font-poppins_medium absolute top-1 left-5" >Vibe</Text>

                        <Image source={images.pexels2}
                            className="w-[430px] h-[184px] rounded rounded-tr-full rounded-bl-full opacity-[0.9] absolute top-40" resizeMode="contain" />

                        <Text className="text-4xl text-cyan-500 font-poppins_bold text-center pt-40"  >A new adventure awaits! with
                            <Text className="text-3xl text-rose-400 font-poppins_extraLight ">Vibe</Text>
                        </Text>
                        <Text className="text-sm text-cyan-400 font-poppins_light pt-3 text-center" >
                            Where moments meet connection. Discover and share what inspires you!
                        </Text>

                        <CustomButton
                            title="Continue with Email"
                            handlePress={() => router.push('/home')}
                            
                            containerStyles="mt-3"

                        />
                        <Link href="/sign-in" className="text-lg font-poppins_bold text-rose-400 mt-4">Sign In</Link>   

                    </View> 
                </View>

            </ScrollView>

            <StatusBar backgroundColor='#ff0000' style="light" />
        </SafeAreaView>
    );
}


