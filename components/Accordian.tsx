import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

const Accordian = (props: any) => {
  const {headingtext, subText, icon, rightArrow} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.imageContainer}>{icon}</View>
          <View style={styles.content}>
            <Text style={styles.heading}>{headingtext}</Text>
            <Text style={styles.subText}>{subText}</Text>
          </View>
          <View>{rightArrow}</View>
        </View>
      </View>
      <View style={styles.underline} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingRight: 15,
    paddingLeft: 15,
    margin: 8,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F3151',
  },
  subText: {
    fontSize: 14,
    width: 300,
    color: '#1F3151',
  },
  underline: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    borderColor: '#1F3151',
  },
  content: {
    paddingLeft: 20,
    width: 270,
  },
  imageContainer:{
    backgroundColor:""
  }
});

export default Accordian;
