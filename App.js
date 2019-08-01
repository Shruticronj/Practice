// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
  
// return (
//     <View style={styles.container}>
//     <Text>Open up App.js to start working on your app!</Text> 
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// Twitter app
// import React, { Component } from 'react';
// import { StyleSheet, View, Text, WebView, TouchableOpacity } from 'react-native';

// export default class MyFirstWebView extends Component{
//   state={
//       WEBVIEW_REF: 'webview_ref'
//     };

//   goBack = () => {
//     this.refs[this.state.WEBVIEW_REF].goBack();
//   }

//   goForward = () => {
//     this.refs[this.state.WEBVIEW_REF].goForward();
//   }

//   render(){
//     return(
//       <View style={{flex: 1}}>
//         <Header/>
        
//         <WebView
//         style={{flex:1}}
//         source={{uri: 'https://twitter.com'}}
//         />
//         <View style={styles.footer}>
//           <TouchableOpacity onPress={()=>this.goBack()}>
//           <Text style={styles.icon}>⬅️</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={()=>this.goForward()}>
//           <Text style={styles.icon}>➡️</Text>
//           </TouchableOpacity>
//         </View>
//         </View>
//     )
//   }
// }

// const Header = () => (
//   <View style={styles.header}>
//     <Text>Profile</Text>
//     </View>
// )

// const styles = StyleSheet.creacte({
//   header: {
//     paddingTop: 40,
//     paddingBottom: 20,
//     backgroundColor: "#0c084c",
//     color: "black",
//     fontSize:'20px'
//   },

//   footer: {
//     backgroundColor: "#0c084c",
//     justifyContent: "space-around"
//   },

//   icon: {
//     padding: 20
//   }

// })

// Youtube video
// import React, {Component} from 'react';
// import { StyleSheet, View, WebView } from 'react-native';

// export default class UVideo extends Component{
//   render(){
//     return(
//       <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
//         <View style={styles.video}>
//         <WebView 
//           javaScriptEnabled={true}
//           source={{uri: 'https://www.youtube.com/embed/t3C2AfBdAac'}}
//         />
//         </View>
//         </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   video: {
//     width: 150,
//     height: 100,
    
//   }
// })

import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Pictures  extends Component{
  render(){
    return(
      <View style={{flex: 1, backgroundColor:'lightblue',justifyContent:'center',alignItems:'center'}}>
        <Image style={styles.pic}
        source={{uri:'http://a1128.g.akamai.net/7/1128/497/0001/origin-d5.scene7.com/is/image/ProvideCommerce/red%20flower%207_blog131210?wid=712'}}/>

        <Image style={styles.pic}
        source={{uri:'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
        
        <Image style={styles.pic}
        source={{uri:'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
        </View>
        )
  }
}

const styles = StyleSheet.create({
  pic: {
    width: 300,
    height: 200
   
  }
})

// Timer

// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default class Timer extends Component{
//   constructor(){
//     super();
//     this.state={
//       valX: 0,
//       valY: 100
//     }

//     setInterval(()=>{
//       this.setState({
//         valX: this.state.valX + 1,
//         valY: this.state.valY - 1
//       })
//     },1000)
//   }

//   render(){
//     return(
//       <View style={styles.container}>
//         <Text style={styles.textx}>Hi! I am Value X:{this.state.valX}</Text>
//         <Text style={styles.texty}>Hi! I am Value Y:{this.state.valY}</Text>
//         </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor:'lavender',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   textx:{
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'red'
//   },
//   texty:{
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'yellow'
//   }
// })




