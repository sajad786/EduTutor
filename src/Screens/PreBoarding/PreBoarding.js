import { View, Text,Image, StyleSheet, ImageBackground } from 'react-native'
import React,{useState} from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import AppIntroSlider from 'react-native-app-intro-slider';

const PreBoarding = () => {

    const [showReelApp, setShowReelApp] = useState(false)

    const slides = [
      {
        key: 1,
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image:
          'https://d1vwxdpzbgdqj.cloudfront.net/assets/mba-courses/bachelor-banner-m-8b1aae8cc51ff11a8e605a9974f883a3b4357363e72b3a5e32b9ee553f217e80.jpg',

        backgroundColor: '#59b2ab',
      },
      {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        image:
          'https://d1vwxdpzbgdqj.cloudfront.net/assets/mba-courses/bachelor-banner-m-8b1aae8cc51ff11a8e605a9974f883a3b4357363e72b3a5e32b9ee553f217e80.jpg',
        backgroundColor: '#febe29',
      },
      {
        key: 3,
        title: 'Rocket guy',
        text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
        image:
          'https://d1vwxdpzbgdqj.cloudfront.net/assets/mba-courses/bachelor-banner-m-8b1aae8cc51ff11a8e605a9974f883a3b4357363e72b3a5e32b9ee553f217e80.jpg',

        backgroundColor: '#22bcb5',
      },
    ];

    const _renderItem = ({ item }) => {
        return (
          <View
          //   style={styles.slide}
          >
            <Text
            // style={styles.title}
            >
              {item.title}
            </Text>
            <ImageBackground
              style={{height: '100%', width: '100%'}}
              source={{uri: item.image}}
            />
            <Text
            // style={styles.text}
            >
              {item.text}
            </Text>
          </View>
        );
  }

 const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowReelApp(true)
    // setState({showRealApp: true});
  };

   return (
     <>
       <AppIntroSlider
         renderItem={_renderItem}
         data={slides}
         onDone={_onDone}
       />
     </>
   );

    // if (false) {
    //   return <PreBoarding />;
    // } else {
    //   return  (
    // //   <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone}/>
    //   <View>
    //       <Text>Hello</Text>
    //   </View>
    //   )
    // }
   
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PreBoarding