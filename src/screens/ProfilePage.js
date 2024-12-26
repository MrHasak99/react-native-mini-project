import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const ProfilePage = () => {
  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");

  const [profile, setProfile] = useState({
    name: "Hamad",
    age: 25,
    phoneNumber: 97737370,
  });

  const handleUpdateProfile = () => {
    setProfile({
      name: nameValue || profile.name,
      age: ageValue ? parseInt(ageValue) : profile.age,
      phoneNumber: phoneNumberValue
        ? parseInt(phoneNumberValue)
        : profile.phoneNumber,
    });

    setNameValue("");
    setAgeValue("");
    setPhoneNumberValue("");
  };

  return (
    <View>
      <Text>Name: {profile.name}</Text>
      <Text>Age: {profile.age}</Text>
      <Text>Phone Number: {profile.phoneNumber}</Text>
      <Button
        title="Change Profile Information"
        onPress={handleUpdateProfile}
      />
      <TextInput
        value={nameValue}
        onChangeText={(name) => setNameValue(name)}
        placeholder="Enter new name"
      />
      <TextInput
        value={ageValue}
        onChangeText={(age) => setAgeValue(age)}
        placeholder="Enter new age"
        keyboardType="numeric"
      />
      <TextInput
        value={phoneNumberValue}
        onChangeText={(phoneNumber) => setPhoneNumberValue(phoneNumber)}
        placeholder="Enter new phone number"
        keyboardType="numeric"
      />
    </View>
  );
};

export default ProfilePage;
