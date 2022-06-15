import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore } from 'date-fns';

import { PlantProps } from '@screens/Home';
import { Button } from '@components/Button';
import WaterDrop from '@assets/waterdrop.png';
import {
  Container,
  PlantInfo,
  Name,
  About,
  Content,
  TipContainer,
  TipImage,
  TipLabel,
  AlertGroup,
  AlertLabel,
} from './styles';

type Params = {
  plant: PlantProps;
}

export function Plant() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState); //contrário do estado anterior. Exemplo: se era false, vira true
    }
    //verificando se o horário já passou
    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Horário', 'Esse horário já passou. Escolha um horário futuro! ⌚');
    }
    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  async function handleNewPlant() {

  }

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri
          uri={plant.photo}
          height={150}
          width={150}
        />
        <Name>{plant.name}</Name>
        <About>{plant.about}</About>
      </PlantInfo>
      <Content>
        <TipContainer>
          <TipImage source={WaterDrop} />
          <TipLabel>{plant.water_tips}</TipLabel>
        </TipContainer>
        <AlertGroup>
          <AlertLabel>Escolha o melhor horário para ser lembrado</AlertLabel>
          {
            showDatePicker && (
              <DateTimePicker
                value={selectedDateTime}
                mode="time"
                display='spinner'
                onChange={handleChangeTime}
              />
            )
          }
          {
            Platform.OS === 'android' && (
              
            )
          }
        </AlertGroup>
        <Button
          title="Cadastrar Planta"
          onPress={handleNewPlant}
        />
      </Content>
    </Container>
  );
}
