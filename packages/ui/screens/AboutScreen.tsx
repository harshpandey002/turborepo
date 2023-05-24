'use client';

import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/Button';
import { TextLink } from 'solito/link';

export default function AboutScreen() {
  const handleClick = () => {
    console.log('about');
  };

  return (
    <View>
      <Text>About Screen</Text>
      {/* <Button onClick={handleClick} text="About" /> */}
      <TextLink href="/">Home</TextLink>
    </View>
  );
}
