import React from "react";
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function Header() {
  return (
    <SafeAreaView>
      <Text style={styles.headerText}>To Do List</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24, 
  },
});