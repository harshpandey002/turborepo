'use client';

import React from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import { Button } from '../components/Button';
import { TextLink } from 'solito/link';

export default function HomeScreen() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      {/* <Button onClick={handleClick} text="About" /> */}
      <TextLink href="/about">About</TextLink>
    </SafeAreaView>
  );
}
