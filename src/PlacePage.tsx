import { Grid, Text, Box, Button } from "@deca-ui/react";
import { Link, useLocation } from "react-router-dom";

function PlacePage() {
  let { state: { place } } = useLocation();
  const openingHours = place.opening_hours.days;
  const openingDays = Object.keys(openingHours);

  return (
    <Grid.Container n={12} xs={10}>
      <Grid xs={10}>
        <Box className='box-item'>
          <Text as="h4">{place.name}</Text>
          <Text as="p">Address: {place.address}</Text>
          <Text as="p">Phone: {place.phone}</Text>
          <Text as="p">URL: {place.url}</Text>
          <Text as="p">Opening hours:</Text>
          {openingDays.map((day, index: number) => (
            <Box key={index}>
              <span>{capitalize(day)}:</span>
              <br/>
              {openingHours[day].map((hours: any) =>
                <>
                  <span>{hours.start}</span> - <span>{hours.end}</span>
                  <br/>
                </>
              )}
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid xs={2}>
      <Link to='/'>
        <Button>
          back
        </Button>
      </Link>
      </Grid>
    </Grid.Container>
  )
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default PlacePage;
