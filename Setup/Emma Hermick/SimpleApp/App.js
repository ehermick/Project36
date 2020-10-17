/**

 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

const App: () => React$Node = () => {
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
              <View style={styles.startButtonStyle}>
                <Text style={styles.buttonText}>
                  GET STARTED
                </Text>
                
              </View>
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
    marginTop: 50,
  },

  buttonText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default App;
