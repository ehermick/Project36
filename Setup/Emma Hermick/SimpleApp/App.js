
import 'react-native-gesture-handler';

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button,
  TouchableOpacity,
  Image, 
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  NavigationContainer, StackActions
} from '@react-navigation/native';

import {
  createStackNavigator
} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ title: ' ' }}
          />

          <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const StartScreen = ({ navigation }) => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>

        <View style={styles.body}>

          <View style={styles.sectionContainer}>
            <Text style={styles.setTitle}>
              You're all set.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.diffTitle}>
              Let's start making a difference!
            </Text>
          </View>

          <View style={styles.sectionContainer}>
              <TouchableOpacity
                style={styles.startButtonStyle}
                activeOpacity = { .5 }
                onPress={() =>
                  navigation.navigate('Home')
                }
                >
                  <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  </>

  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>

        <View style={styles.body}>

          <View style={styles.sectionContainer}>
            <Text style={styles.setTitle}>
              Home Page
            </Text>
          </View>


          <View style={styles.bottomButtons}>
              <TouchableOpacity
                style={styles.smallButtonStyle}
                activeOpacity = { .5 }
                onPress={() =>
                  navigation.navigate('Home')
                }
                >
                  <Text style={styles.smallButtonText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.smallButtonStyle}
                activeOpacity = { .5 }
                onPress={() =>
                  navigation.navigate('Lend')
                }
                >
                  <Text style={styles.smallButtonText}>Lend</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.smallButtonStyle}
                activeOpacity = { .5 }
                onPress={() =>
                  navigation.navigate('SaveNow')
                }
                >
                  <Text style={styles.smallButtonText}>Save Now</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.smallButtonStyle}
                activeOpacity = { .5 }
                onPress={() =>
                  navigation.navigate('Savings')
                }
                >
                  <Text style={styles.smallButtonText}>Savings</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.smallButtonStyle}
                activeOpacity = { .5 }
                onPress={() =>
                  navigation.navigate('Account')
                }
                >
                  <Text style={styles.smallButtonText}>Account</Text>
                </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  </>

  );
};



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },

  backgroundImage: {
    height: 200, 
    width: 200, 
    resizeMode: 'stretch',
  }, 

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  setTitle: {
    fontSize: 25,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 40,

  },

  diffTitle: {
    fontSize: 38,
    fontWeight: '300',
    textAlign: 'center',
    color: Colors.black,

  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 'auto',
  },

  startButtonStyle: {
    padding: 5, 
    height: 50, 
    width: 365, 
    borderRadius: 50, 
    backgroundColor: "#4ccade",
    marginTop: 250,
    marginBottom: 50,
  },

  buttonText: {
    color: Colors.white,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: "#4ccade",
    borderRadius: 50, 
  },

  bottomButtons: {
    backgroundColor: "#ced1d6",
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'flex-end',
    marginTop: 408,
    height: 90,
  },

  smallButtonStyle: {
    marginLeft: 18,
    marginRight: 18,
    paddingBottom: 25,
  },

  smallButtonText: {
    textAlign: 'center',
  },
});

export default App;
