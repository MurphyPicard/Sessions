import  React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { CardSection, Card } from '../components/common';


class NewSessionScreen extends Component{
  static navigationOptions = {
  title: 'New Session'
  }

  constructor(props) {
    super(props);
    this.state = { textName: "What is the session name?",
                   textTime: "What is the date and time?",
                   textLocation: "Where will we meet?"

                  };
  }

  render(){
    return(
      <View>
        <Text> NewSessionScreen </Text>

        <CardSection>
          <Text> Name </Text>
          <TextInput
          style={{height: 40, width: 200, borderColor: 'black', borderWidth: 1}}
          onChangeText={(textName) => this.setState({textName})}
          value={this.state.textName}
          />
        </CardSection>

        <CardSection>
          <Text> Time </Text>
          <TextInput
          style={{height: 40, width: 200, borderColor: 'black', borderWidth: 1}}
          onChangeText={(textTime) => this.setState({textTime})}
          value={this.state.textTime}
          />
        </CardSection>

        <CardSection>
          <Text> Location </Text>
          <TextInput
          style={{height: 40, width: 200, borderColor: 'black', borderWidth: 1}}
          onChangeText={(textLocation) => this.setState({textLocation})}
          value={this.state.textLocation}
          />
        </CardSection>

        <Button onPress={() => this.props.navigation.navigate('Home')}
        title='Submit New Session'></Button>

      </View>
    )
  }

}//NewSessionScreen

export { NewSessionScreen };
