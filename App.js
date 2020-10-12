
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { styles, colors } from './Styles';


const Stack = createStackNavigator();

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    console.log("in HomeScreen, route.params = ", props.route.params);

    this.nextKey = 0;
    this.state = {
      theList: [
        {
          text: "Get milk",
          key: '' + this.nextKey++
        },
        {
          text: "Call mom",
          key: '' + this.nextKey++,
        },
      ]
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', this.onFocus);
  }

  onFocus = () => {
    // check the current params
    const {action, text, id} = this.props.route.params;
    if (action === "add") {
      this.addItem(text);
    } else if (action === "edit") {
      this.updateItem(id, text);
    }
    this.props.navigation.setParams({action: 'none'}); // make sure each action is only done once
  }

  addItem = (itemText) => {
    console.log("now would add item, " + itemText);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            ListMaker 1000
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.listContainer}>
            <FlatList
              data={this.state.theList}
              ItemSeparatorComponent={()=>(
                <View style={styles.separator}
                />
              )}
              renderItem={({item})=>{
                return(
                  <View style={styles.listItemContainer}>
                    <View style={styles.listItemTextContainer}> 
                      <Text style={styles.listItemText}>
                        {item.text}
                      </Text> 
                    </View>
                    <View style={styles.listItemButtonContainer}>
                      <Ionicons name="md-create" 
                        size={24} 
                        color={colors.primaryDark} />
                      <Ionicons name="md-trash" 
                        size={24} 
                        color={colors.primaryDark} />                    
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={()=>
              this.props.navigation.navigate(
                'Detail', 
                {
                  mode: "add",
                })}
          >
            <Ionicons name="md-add-circle" 
              size={80} 
              color={colors.primaryDark} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class DetailScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText : ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            ListMaker 1000
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>Add Item</Text>
            <TextInput
              placeholder='Enter item text'
              style={styles.textInputBox}
              onChangeText={(text) => this.setState({inputText: text})}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerButtonContainer}>
            <TouchableOpacity 
              style={styles.footerButton}
              onPress={()=>{this.props.navigation.navigate("Home"), {action: "none"}}}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.footerButton}
              onPress={()=>{
                // TODO: check for empty string
                this.props.navigation.navigate("Home", {
                  action: 'add',
                  text: this.state.inputText,
                  id: -1,
                  time: new Date().toLocaleString()
                });
              }}>
              <Text style={styles.footerButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"   
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;