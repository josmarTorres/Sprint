import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,  TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Elije una imagen de la galeria" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <TextInput
        label = "correo electronico"
        style = {{backgroundColor: '#fff', width: 200, height: 50, margin: 20, borderRadius: 20}}
        placeholder = "Descripcion del problema"
      />
    </View>
  );
}