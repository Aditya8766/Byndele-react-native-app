import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

interface HelpModalProps {
  backgroundColor: string;
  buttonBackgroundColor: string;
  onPress: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ backgroundColor, buttonBackgroundColor, onPress }) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 20,
      borderWidth: 0.5,
      padding: 20,
      margin: 25,
      marginBottom:20,
      backgroundColor,
    },
    heading: {
      fontSize: 16,
      fontWeight: '500',
      color: '#1F3151',
    },
    subTextcontainer: {
      flexDirection: 'row',
      width: 180,
    },
    subText: {
      color: '#1F3151',
    },
    button: {
      width: 105,
    },
    askNowButton: {
      backgroundColor: buttonBackgroundColor || '#3E89FA',
    },
    image:{
      marginTop:5
    }
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Get Help from Investment Experts</Text>
        <View style={styles.subTextcontainer}>
          <Text style={styles.subText}>Keep putting your queries out to us.</Text>
          <Image style={styles.image} source={require('../assets/discussion.png')} />
        </View>
        <View style={styles.button}>
          <Button style={styles.askNowButton} mode="contained" onPress={onPress}>
            Ask Now
          </Button>
        </View>
      </View>
    </>
  );
};

export default HelpModal;
