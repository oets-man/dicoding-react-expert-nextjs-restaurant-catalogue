import RestaurantList from '../components/RestaurantsList';
import Container from '../components/styled/Container';

export default function Home({ restaurants }) {
  return (
    <Container>
      <RestaurantList restaurants={restaurants} />
    </Container>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list', {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    },
  });
  const responseJson = await response.json();

  return {
    props: {
      restaurants: responseJson.restaurants || [],
    },
  };
}
