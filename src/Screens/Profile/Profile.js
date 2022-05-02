import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import {useIsFocused} from '@react-navigation/native';
import imagePath from '../../constants/imagePath';

const includeExtra = true;
var type;
const Profile = () => {
  const [response, setResponse] = useState(null);

  // const actions = [
  //   {
  //     title: 'Take Image',
  //     type: 'capture',
  //     options: {
  //       saveToPhotos: true,
  //       mediaType: 'photo',
  //       includeBase64: false,
  //       includeExtra,
  //     },
  //   },
  //   {
  //     title: 'Select Image',
  //     type: 'library',
  //     options: {
  //       maxHeight: 200,
  //       maxWidth: 200,
  //       selectionLimit: 0,
  //       mediaType: 'photo',
  //       includeBase64: false,
  //       includeExtra,
  //     },
  //   },
  //   {
  //     title: 'Take Video',
  //     type: 'capture',
  //     options: {
  //       saveToPhotos: true,
  //       mediaType: 'video',
  //       includeExtra,
  //     },
  //   },
  //   {
  //     title: 'Select Video',
  //     type: 'library',
  //     options: {
  //       selectionLimit: 0,
  //       mediaType: 'video',
  //       includeExtra,
  //     },
  //   },
  //   {
  //     title: `Select Image or Video\n(mixed)`,
  //     type: 'library',
  //     options: {
  //       selectionLimit: 0,
  //       mediaType: 'mixed',
  //       includeExtra,
  //     },
  //   },
  // ];

  const actions = [
    {
      title: 'Take Image',
      type: 'capture',
      options: {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra,
      },
    },
    {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra,
      },
    },
  ];

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  const galleryOptions = {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,
    includeExtra,
  };

  const cameraOptions = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
    includeExtra,
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    onButtonPress((type = 'Select Image'), galleryOptions);
  }, [isFocused]);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => onButtonPress((type = 'Select Image'), galleryOptions)}
        style={{padding: 10, backgroundColor: 'grey'}}>
        <Text style={{color: 'white'}}>open Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onButtonPress((type = 'capture'), cameraOptions)}
        style={styles.camera}>
        <Image style={styles.cameraImage} source={imagePath.icCAMERA} />
        {/* <Text style={{color: 'white'}}>open Camera</Text> */}
      </TouchableOpacity>

      {/* <View style={styles.buttonContainer}>
        {actions.map(({title, type, options}) => {
          return (
            <View style={{flexDirection: 'row', marginBottom: 10}} key={title}>
              <Button
                title={title}
                onPress={() => onButtonPress(type, options)}
              />
            </View>
          );
        })}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },

  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  camera: {
    position: 'absolute',
    bottom: 29,
    right: 35,
    backgroundColor: 'grey',
    height: 50,
    borderRadius: 50,
  },
  cameraImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    tintColor: 'white',
  },
});

export default Profile;
