import  React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { CardSection, Card } from '../components/common'



class NewSessionScreen extends Component{
  static navigationOptions = {
  title: 'New Session'
  }

  render(){
    return(
      <View>
        <Text> NewSessionScreen </Text>

        <CardSection>
          <Text> Name </Text>
          <TextInput
          style={{height: 40, width: 200, borderColor: 'red', borderWidth: 1}}
          />
        </CardSection>

        <CardSection>
          <Text> Time </Text>
          <TextInput
          style={{height: 40, width: 200, borderColor: 'red', borderWidth: 1}}
          />
        </CardSection>

        <CardSection>
          <Text> Location </Text>
          <TextInput
          style={{height: 40, width: 200, borderColor: 'red', borderWidth: 1}}
          />
        </CardSection>

        <Button onPress={() => this.props.navigation.navigate('Session')}
        title='Submit New Session'></Button>

      </View>
    )
  }

}//NewSessionScreen

export { NewSessionScreen };
