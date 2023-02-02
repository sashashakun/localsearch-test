import { useState, useEffect } from 'react';
import { Input, Box, Grid, Text } from '@deca-ui/react';
import {
  Link,
} from 'react-router-dom';

import './App.css'

interface Place {
  address: string;
  name: string;
  url: string;
  phone: string;
  opening_hours: any;
  id: string;
}

function App() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    fetch('/api/backend')
      .then(res => res.json())
      .then(data => setPlaces(data.body.places))
  }, [])

  return (
    <div className="App">
      <Input
        size='lg'
        label=''
        placeholder='Search business entries...'
        className='search-input'
        focusColor='primary'
      />
      {!places.length && 'Places are loading...'}
      {Boolean(places.length) && 
        <Grid.Container n={12} xs={6}>
          {places.map((place: Place) => (
            <Grid key={place.id}>
              <Link to={`places/${place.id}`} state={{ place }}>
                <Box className='box-item'>
                  <Text as="h5">{place.name}</Text>
                  <Text as="p">{place.address}</Text>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid.Container>
      }
    </div>
  )
}

export default App
