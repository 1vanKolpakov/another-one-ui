import React from "react";
import type { Preview } from "@storybook/react";
import '../src/styles/index.scss'
import '../src/styles/variables/colors.scss'


const preview: Preview = {
  // decorators: [
  // ]
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;

