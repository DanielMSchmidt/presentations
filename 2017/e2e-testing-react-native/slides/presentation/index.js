// Import React
import React from "react";

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
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            E2E Testing in React Native
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} >
            by Daniel Schmidt (@dschmidt1992)
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">What?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Why?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">How?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Tooling</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Appium</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Setup</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Testing a Feature</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Is it optimal?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Detox</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Setup</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Testing a Feature</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Is it optimal?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Tool comparison</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Credits</Heading>
        </Slide>
      </Deck>
    );
  }
}
