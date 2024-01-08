import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Accordian from './components/Accordian';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HelpModal from './components/HelpModal';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const accordianData = [
    {
      heading: "NRO/NRE Account",
      subText: "Write some copy here to help the user understand Tax Advisory",
      icon: <Image source={require('./assets/oval.png')} />,
      rightArrow: <FontAwesomeIcon icon={faAngleRight} />,
    },
    {
      heading: "Fixed Deposit",
      subText: "Write some copy here to help the user understand Legal Advisory",
      icon: <Image source={require('./assets/oval.png')} />,
      rightArrow: <FontAwesomeIcon icon={faAngleRight} />,
    },
    {
      heading: "Debt Fund",
      subText: "Write some copy here to help the user understand Start-ups",
      icon: <Image source={require('./assets/oval.png')} />,
      rightArrow: <FontAwesomeIcon icon={faAngleRight} />,
    },
  ];
  const handleAskNowPress = () => {
    Alert.alert("Ask Now button pressed!");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.MainHeading}>Low Risk Investment</Text>
        <HelpModal
          backgroundColor="#FFCB86"
          buttonBackgroundColor="#3E89FA"
          onPress={handleAskNowPress}
        />
        {accordianData.map((data, index) => (
          <Accordian
            key={index}
            headingtext={data.heading}
            subText={data.subText}
            icon={data.icon}
            rightArrow={data.rightArrow}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
  },
  MainHeading: {
    margin: 25,
    marginBottom: 2,
    fontSize: 18,
    fontWeight: '600',
    color: '#1F3151',
  },
});

export default App;
