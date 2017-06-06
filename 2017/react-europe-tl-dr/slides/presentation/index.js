// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Europe 2017
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="secondary">
            Surrounding impressions
          </Heading>
          <Image
            style={{ width: '100%' }}
            src="https://pbs.twimg.com/media/DADHlRsXUAETNld.jpg:large "
          />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Day 1</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Keynote by Andrew Clark
          </Heading>
          React 16 has
          <List>
            <ListItem>Fiber</ListItem>
            <ListItem>Partials</ListItem>
            <ListItem>Error Boundaries</ListItem>
            <ListItem>Async Rendering</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            La nouvelle vague by Sunil Pai
          </Heading>
          <List>
            <ListItem>
              The new wave is the movement from runtimes to compilers
            </ListItem>
            <ListItem>
              "If you can’t introduce a library gradually, it’s dead on arrival"
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Imperfection by Cheng Lou
          </Heading>
          <List>
            <ListItem>
              Doing 80% with 20% of the efforts is good enough most of the times.
            </ListItem>
            <ListItem>
              "Grow your slopiness budget by approaching certain parts as e.g. the foundation with a 100% mentality"
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            How Streaming Can Supercharge React by Sasha Aickin
          </Heading>
          <List>
            <ListItem>
              Client Side loading gives a bad user experience, Server Side Rendering is better but has a long time of non-interactive sites
            </ListItem>
            <ListItem>
              Chunked Rendering allows different parts of the application to load individually, which also leads to better fault tolerance
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Detox by Tal Kol & Rotem Mizrachi-Median
          </Heading>
          <List>
            <ListItem>
              Super cool E2E testing tool for React Native
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Day 2</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            The making of Twitter Lite by Nicolas Gallagher
          </Heading>
          <List>
            <ListItem>
              Twitter Light doesn’t use Server Side Rendering; he explained why in detail
            </ListItem>

            <ListItem>
              Think about disposability of parts of your application while designing the system
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Exploring Relay Modern by Lee Byron
          </Heading>
          <List>
            <ListItem>
              Relay Modern shifts assumptions from dynamic queries to static ones, allowing compilers to do ahead of time optimizations

            </ListItem>

            <ListItem>
              900ms win on Facebook Marketplace app
            </ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
