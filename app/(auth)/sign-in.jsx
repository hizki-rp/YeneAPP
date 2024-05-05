import { Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  handleClick = () => {
    alert('Button clicked!');
  }

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {  console.log("hello");  };

  return (
    <SafeAreaView className="bg-stone-900 h-full">
      <ScrollView>
        <View className="w-full justify-center min-h[85vh] px-4 my-6">
      
          {/* 
          
              <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          
          */}

          <Text className="text-5xl text-rose-500 ">Vibe</Text>

          <Text className=" text-white text-2xl font-poppins_bold mt-10">
            Sign In to Vibe!
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={this.handleClick}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="justify-center pt-5 text-stone-500 text-xl text-poppins_extraLight">
              Don't have an account?
            </Text>

            <Link
              href="/sign-up"
              className="text-xl font-poppins_bold text-rose-500 pt-5"
            >
              Sign Up
            </Link>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
