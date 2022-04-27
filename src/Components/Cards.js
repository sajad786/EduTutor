import { View, Text, StyleSheet, Image, FlatList} from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize'
import imagePath from '../constants/imagePath'

const Cards = ({data}) => {
    const userData = data 

    console.log(userData, "userrrrr")
        // const PostHeader = userData => (
        //   <View
        //     style={{
        //       flexDirection: 'row',
        //       justifyContent: 'space-between',
        //       margin: 5,
        //       alignItems: 'center',
        //     }}>
        //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
        //       <Image
        //         style={styles.postsPicture}
        //         // source={{uri: userData.profilePic}}
        //         source={{
        //           uri: 'https://www.whatsappimages.in/wp-content/uploads/2021/12/Free-Stylish-Boys-Whatsapp-DP-Wallpaper-for-Status.jpg',
        //         }}
        //       />
        //       <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>
        //         {userData.profileName} hello
        //       </Text>
        //       <Text>hello</Text>
        //     </View>

        //     <Text style={{color: 'white', fontWeight: '900'}}> ... </Text>
        //   </View>
        // );
    
       const PostHeader = userData => (
         <View style={styles.postHeaderContainer}>
           <View style={styles.posterName}>
             <View>
               <Image
                 style={styles.profilePicture}
                 source={{
                   uri: 'https://www.whatsappimages.in/wp-content/uploads/2021/12/Free-Stylish-Boys-Whatsapp-DP-Wallpaper-for-Status.jpg',
                 }}
               />
             </View>
             <View style={{marginLeft: moderateScale(16)}}>
               <Text style={styles.profileName}>{userData.profileName}</Text>
               <Text style={styles.loc}>Hello</Text>
             </View>
           </View>
           <View>
             <Text style={{color: 'white', fontWeight: '900'}}> ... </Text>
           </View>
         </View>
       );

       const Post = () => (
         <View>
           <View style={styles.postContainer}>
             <Image
               style={styles.postImage}
               source={{
                 uri: 'https://images.unsplash.com/photo-1604049928882-31200d4a13cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
               }}
             />
             <View style={styles.postFooter}>
               <Text style={styles.postDesc}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                 in turpis luctus.
               </Text>
               <Text
                 style={{
                   color: colors.LIGHTGREYTEXT,
                   marginVertical: moderateScaleVertical(8),
                 }}>
                 1 hr ago
               </Text>
               <View style={styles.postFooterTxt}>
                 <Text style={styles.textCommon}>Comments 1,125</Text>
                 <Text style={styles.textCommon}>Likes 44,686</Text>
                 <Image style={{tintColor:colors.LIGHTGREYTEXT}} source={imagePath.icSHARE} />
               </View>
             </View>
           </View>
         </View>
       );



        const PostContent = userData => {
            console.log(userData.profileName, "profile")
          return(
              <View style={styles.wrapper}>
              <PostHeader userData={userData} />
                <Post userData={userData}/>
              </View>
               
          )

        };

  return (
    <View >
      {/* <PostHeader userData={userData} /> */}
      <FlatList data={userData} renderItem={PostContent} extraData={userData.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  //   footerIcon: {
  //     width: 33,
  //     height: 33,
  //     tintColor: 'white',
  //   },
  //   leftFooterIcons: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     width: '32%',
  //   },
  //   shareIcon: {
  //     // transform:[{rotate:'30deg'}],
  //     marginTop: 1,
  //   },
  
  wrapper: {
    marginBottom:moderateScaleVertical(24),
    backgroundColor: colors.SECONDARY_COLOR,
    borderRadius:moderateScale(8),
    paddingHorizontal:moderateScale(8),
  },

  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 6,
    height: moderateScaleVertical(60),
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
  posterName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    color: colors.WHITE,
  },
  loc: {
    color: colors.LIGHTGREYTEXT,
  },
  postImage: {
    width: '100%',
    height: moderateScaleVertical(312),
  },
  postDesc: {
    color: colors.LIGHTGREYTEXT,
    textAlign: 'justify',
    fontSize: textScale(15),
    //   fontFamily:
  },
  postFooter: {
    marginHorizontal: moderateScaleVertical(10),
    marginVertical: moderateScaleVertical(16),
  },
  postFooterTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScaleVertical(8),
  },
  textCommon: {
    color: colors.LIGHTGREYTEXT,
  },
});


export default Cards