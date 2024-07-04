import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';
import * as Location from 'expo-location';
import { useState } from 'react';
import { Text } from 'react-native';

import routeResponse from '~/data/route.json';

import { useScooter } from '~/providers/ScooterProvider';
import { getDirections } from '~/services/directions';
import LineRoute from './LineRoute';
import ScooterMarkers from './SccoterMarker';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

export default function Map() {
  const { directionCoordinates } = useScooter();

  return (
    <MapView style={{ flex: 1 }} styleURL="mapbox://styles/mapbox/dark-v11">
      <Camera followZoomLevel={1} followUserLocation />
      <LocationPuck puckBearingEnabled puckBearing="heading" pulsing={{ isEnabled: true }} />
      <ScooterMarkers />
      {directionCoordinates && <LineRoute coordinates={directionCoordinates} />}
    </MapView>
  );
}
