import React from "react";
import type { Preview } from "@storybook/react";
import '../src/styles/index.scss'


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decorators: [

  // ]
};

export default preview;

