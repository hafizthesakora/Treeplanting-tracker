import { Stack, Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import Map from '~/components/Map';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Map />
      <StatusBar style="light" />
    </>
  );
}
