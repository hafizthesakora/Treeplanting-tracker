import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';
import { Text } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

export default function Map() {
  return (
    <MapView style={{ flex: 1 }} styleURL="mapbox://styles/mapbox/dark-v11">
      <Camera followZoomLevel={16} followUserLocation />
      <LocationPuck puckBearingEnabled puckBearing="heading" pulsing={{ isEnabled: true }} />
    </MapView>
  );
}
