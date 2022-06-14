import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { Load } from '@components/Load';
import { Header } from '@components/Header';
import { PlantCardPrimary } from '@components/PlantCardPrimary';
import { EnviromentButton } from '@components/EnviromentButton';
import {
  Container,
  Content,
  Title,
  Subtitle,
  Environments,
  EnviromentsList,
  Plants,
  PlantsList
} from './styles';

type EnvironmentProps = {
  key: string;
  title: string;
}

type PlantProps = {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function Home() {
  const [environment, setEnvironment] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]); //estado auxiliar para atuar na filtragem dos tipos de plantas (ideal para não ficar fazendo requisição p/ API)
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);
  //estados para paginação
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);
    if (environment === 'all') {
      return setFilteredPlants(plants);
    }
    //percorrendo cada planta e verificando se a planta possui determinado ambiente
    const filtered = plants.filter(plant =>
      plant.environments.includes(environment)
    );
    setFilteredPlants(filtered);
  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      setEnvironment([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ]);
    }

    async function fetchPlants() {
      const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
      setPlants(data);
    }
    fetchEnviroment();
    fetchPlants();
    setLoading(false);
  }, []);

  if (loading) {
    return <Load />
  }

  return (
    <Container>
      <Content>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </Content>
      <Environments>
        <EnviromentsList
          data={environment}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              isActived={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
        />
      </Environments>
      <Plants>
        <PlantsList
          data={filteredPlants}
          numColumns={2}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />
          )}
        />
      </Plants>
    </Container>
  );
}
