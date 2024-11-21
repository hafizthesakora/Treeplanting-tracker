import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useEffect, useRef } from 'react';
import { Text, Image, View } from 'react-native';

import { useScooter } from '~/providers/ScooterProvider';
import plantImage from '~/assets/image.png';
import { Button } from './Button';

export default function SelectedScooterSheet() {
  const { selectedScooter, duration, distance, isNearby } = useScooter();

  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (selectedScooter) {
      bottomSheetRef.current?.expand();
    }
  }, [selectedScooter]);
  return (
    <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={[200]} enablePanDownToClose>
      <BottomSheetView style={{ flex: 1, padding: 10, gap: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Image source={plantImage} style={{ width: 60, height: 60 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>
              Seedling - {selectedScooter?.id}
            </Text>
            <Text>Eni Ghana LC | Tree Planting </Text>
          </View>
          <View style={{ gap: 5 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                alignSelf: 'flex-start',
              }}>
              <FontAwesome6 name="flag-checkered" size={24} color="#42E100" />
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                {(distance / 1000).toFixed(1)} km
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                alignSelf: 'flex-start',
              }}>
              <FontAwesome6 name="clock" size={24} color="#42E100" />
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                {(duration / 60).toFixed(0)} min
              </Text>
            </View>
          </View>
        </View>

        {/* BOTTOM PART */}
        <View>
          <Button title="Follow the map to the Plant" disabled={!isNearby} />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
