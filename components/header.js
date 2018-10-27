import React, { Component } from 'react'
import { 
  Text, 
  View,  
  StyleSheet, 
  TextInput, 
  TouchableOpacity
 } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
      <TouchableOpacity onPress={this.props.onToggleAllComplete}>
        <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
      </TouchableOpacity>
      <TextInput
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          placeholder="Say Something you want to do.. "
          blurOnSubmit={false}
          returnKeyType="done"
          style={styles.input}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
     header: {
      paddingHorizontal:19,
      marginTop:5,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
     },
     toggleIcon:{
       fontSize: 30,
       color: "#CCC"
     },
     input: {
         flex: 1,
         marginLeft: 16,
         height: 70
     }
})